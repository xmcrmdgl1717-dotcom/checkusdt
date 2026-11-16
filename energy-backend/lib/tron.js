const { TronWeb } = require('tronweb');

const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io',
  headers: { 'TRON-PRO-API-KEY': process.env.TRONGRID_API_KEY },
  privateKey: process.env.RESOURCE_POOL_PRIVATE_KEY,
});

module.exports = { tronWeb };
