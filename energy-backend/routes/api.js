const express = require('express');
const router = express.Router();
const { pool } = require('../lib/matcher');

router.get('/health', (req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

router.get('/orders/:txId', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT tx_id, from_address, amount_trx, energy_amount,
              status, delegate_tx_id, error_message, created_at
       FROM energy_orders WHERE tx_id = $1 LIMIT 1`,
      [req.params.txId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: '订单不存在' });
    }
    // NUMERIC 类型在 pg 中默认返回字符串，这里转为数字方便前端展示
    const row = result.rows[0];
    row.amount_trx = Number(row.amount_trx);
    row.energy_amount = Number(row.energy_amount);
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
