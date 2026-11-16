const { tronWeb } = require('./tron');

const LOCK_PERIOD_BLOCKS = Number(process.env.LOCK_PERIOD_BLOCKS || 1200); // 1 小时

async function delegateEnergy(receiverAddress, energyAmount) {
  const poolAddress = process.env.RESOURCE_POOL_ADDRESS;

  if (!poolAddress) {
    throw new Error('RESOURCE_POOL_ADDRESS 未配置');
  }

  // TronWeb 的 amount 单位是 sun；能量数量本身是整数，但接口要求 sun 格式
  // 65000 能量 = 65000 × 1e6 sun 这个换算在 TronWeb 内部由 amount 参数处理，
  // 实际传入时 amount 直接传能量数值即可（TronWeb 6.x 行为）
  const amount = energyAmount;

  const tx = await tronWeb.transactionBuilder.delegateResource(
    amount,
    receiverAddress,
    'ENERGY',
    poolAddress,
    true,
    LOCK_PERIOD_BLOCKS
  );

  const signed = await tronWeb.trx.sign(tx);
  const result = await tronWeb.trx.sendRawTransaction(signed);

  if (!result.result) {
    throw new Error(result.message || 'delegateResource 广播失败');
  }

  // 等待确认并校验 receipt
  let info = null;
  for (let i = 0; i < 10; i++) {
    await new Promise(r => setTimeout(r, 3000));
    info = await tronWeb.trx.getTransactionInfo(result.txid);
    if (info && info.receipt) {
      if (info.receipt.result === 'SUCCESS') return result.txid;
      throw new Error(`委托交易执行失败: ${info.receipt.result}`);
    }
  }

  throw new Error('委托交易确认超时');
}

module.exports = { delegateEnergy };
