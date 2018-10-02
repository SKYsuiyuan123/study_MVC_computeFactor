const express = require('express');

const routers = require('./routers');

const app = express();

// 使用路由
app.use('', routers);

// 托管静态文件
app.use(express.static('static'));

app.listen(3000);
console.log('server is running at 3000');