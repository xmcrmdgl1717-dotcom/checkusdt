const express = require('express');
const router = express.Router();
const { pool } = require('../lib/matcher');

router.get('/health', (req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

router.get('/orders/:txId', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT tx_id, from_address, amount_trx, energy_amount,
              status, delegate_tx_id, error_message, created_at
       FROM energy_orders WHERE tx_id = ? LIMIT 1`,
      [req.params.txId]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: '订单不存在' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
