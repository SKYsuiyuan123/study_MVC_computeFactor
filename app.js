/*
 * @Author: sky
 * @Date: 2018-12-22 18:53:06
 * @Description: 项目启动文件
 */
const path = require('path');
const logger = require('morgan');
const express = require('express');


/* 监听端口 */
const port = 3000;


/* 引入控制器 */
const controller = require('./controllers/controller');


/* 实例化 app */
const app = express();


/* 去掉响应头里的服务器说明 */
app.disable('x-powered-by');


/* 模板引擎 ejs */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/* 监控日志 */
app.use(logger('dev'));


/* 路由表 */
app.get('/', controller.showIndex);
app.get('/number/:number', controller.showResult);


/* 静态资源 */
app.use(express.static('public'));


/* 监听服务 */
app.listen(port, () => {
    console.log(`server is running at ${port} port`);
});