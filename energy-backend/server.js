require('dotenv').config();
const express = require('express');
const { startListener } = require('./lib/listener');
const apiRouter = require('./routes/api');

const app = express();
app.use(express.json());
app.use('/api', apiRouter);

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, () => {
  console.log(`[server] 监听端口 ${PORT}`);
  startListener();
});
