const axios = require('axios');
const { tronWeb } = require('./tron');
const { handlePayment } = require('./matcher');

const RECEIVE_ADDRESS = process.env.RENTAL_RECEIVE_ADDRESS;
const POLL_INTERVAL_MS = Number(process.env.POLL_INTERVAL_MS || 5000);

let running = false;

async function pollOnce() {
  if (!RECEIVE_ADDRESS) {
    console.error('[listener] RENTAL_RECEIVE_ADDRESS 未配置');
    return;
  }

  try {
    const res = await axios.get(
      `https://api.trongrid.io/v1/accounts/${RECEIVE_ADDRESS}/transactions`,
      {
        timeout: 15000,
        headers: {
          'TRON-PRO-API-KEY': process.env.TRONGRID_API_KEY || '',
          Accept: 'application/json',
        },
        params: {
          limit: 30,
          only_confirmed: true,
          order_by: 'block_timestamp,desc',
        },
      }
    );

    const txs = res.data?.data || [];
    for (const tx of txs) {
      const contract = tx.raw_data?.contract?.[0];
      if (!contract || contract.type !== 'TransferContract') continue;

      const toHex = contract.parameter?.value?.to_address;
      if (!toHex) continue;

      const toAddress = tronWeb.address.fromHex(toHex);
      if (toAddress !== RECEIVE_ADDRESS) continue;

      const fromAddress = tronWeb.address.fromHex(contract.parameter.value.owner_address);
      const amountTRX = Number(contract.parameter.value.amount) / 1e6;
      const txId = tx.txID;

      await handlePayment(txId, fromAddress, amountTRX);
    }
  } catch (err) {
    console.error('[listener] 轮询失败:', err.message);
  }
}

function startListener() {
  if (running) return;
  running = true;
  console.log(`[listener] 开始监听收款地址: ${RECEIVE_ADDRESS}`);
  setInterval(pollOnce, POLL_INTERVAL_MS);
  pollOnce();
}

module.exports = { startListener };
