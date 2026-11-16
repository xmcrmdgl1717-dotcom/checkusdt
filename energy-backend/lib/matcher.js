const mysql = require('mysql2/promise');
const { delegateEnergy } = require('./delegator');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
});

const TRX_PER_BATCH = 2;        // 2 TRX = 1 批
const ENERGY_PER_BATCH = 65000; // 1 批 = 65,000 能量
const MAX_BATCHES = 2;          // 单次最多 2 批
const MAX_TRX = 50;             // 单次金额上限

async function handlePayment(txId, fromAddress, amountTRX) {
  // 幂等：同一 txId 只处理一次
  const [existing] = await pool.query(
    'SELECT id FROM energy_orders WHERE tx_id = ? LIMIT 1',
    [txId]
  );
  if (existing.length > 0) return;

  // 规则拦截
  if (amountTRX > MAX_TRX) {
    return saveAnomaly(txId, fromAddress, amountTRX, '金额超过 50 TRX 上限');
  }

  if (amountTRX <= 0) {
    return saveAnomaly(txId, fromAddress, amountTRX, '金额无效');
  }

  const batchesFloat = amountTRX / TRX_PER_BATCH;
  if (!Number.isInteger(batchesFloat)) {
    return saveAnomaly(txId, fromAddress, amountTRX, '金额不是 2 TRX 的整数倍');
  }

  const batches = batchesFloat;
  if (batches < 1 || batches > MAX_BATCHES) {
    return saveAnomaly(txId, fromAddress, amountTRX, '超出单次 1–2 笔范围');
  }

  const energyAmount = batches * ENERGY_PER_BATCH;

  // 写入订单（pending）
  const [insertResult] = await pool.query(
    `INSERT INTO energy_orders
      (tx_id, from_address, amount_trx, energy_amount, batches, status)
     VALUES (?, ?, ?, ?, ?, 'pending')`,
    [txId, fromAddress, amountTRX, energyAmount, batches]
  );

  const orderId = insertResult.insertId;

  try {
    await pool.query(
      `UPDATE energy_orders SET status = 'delegating' WHERE id = ?`,
      [orderId]
    );

    const delegateTxId = await delegateEnergy(fromAddress, energyAmount);

    await pool.query(
      `UPDATE energy_orders
       SET status = 'success', delegate_tx_id = ?
       WHERE id = ?`,
      [delegateTxId, orderId]
    );

    console.log(`[delegator] 成功: ${txId} → ${fromAddress}, ${energyAmount} energy`);
  } catch (err) {
    await pool.query(
      `UPDATE energy_orders
       SET status = 'failed', error_message = ?
       WHERE id = ?`,
      [String(err.message).slice(0, 255), orderId]
    );
    console.error(`[delegator] 失败: ${txId}`, err.message);
  }
}

async function saveAnomaly(txId, fromAddress, amountTRX, reason) {
  try {
    await pool.query(
      `INSERT IGNORE INTO anomaly_transfers
        (tx_id, from_address, amount_trx, reason)
       VALUES (?, ?, ?, ?)`,
      [txId, fromAddress, amountTRX, reason]
    );
    console.warn(`[anomaly] ${txId}: ${reason}`);
  } catch (err) {
    console.error('[anomaly] 写入失败:', err.message);
  }
}

module.exports = { handlePayment, pool };
