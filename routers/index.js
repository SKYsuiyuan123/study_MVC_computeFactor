const express = require('express');
const bodyParser = require('body-parser');

// 控制器
const controllers = require('../controller');
const controller = new controllers();

const router = express.Router();

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

router.use(bodyParser.urlencoded({
    extended: false
}));

router.use(bodyParser.json());


/* 路由开始 */

// 计算一个数的因数
router.post('/computeFactor', controller.computeFactor);


// 导出
module.exports = router;