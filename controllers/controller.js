/*
 * @Author: sky
 * @Date: 2018-12-22 18:49:24
 * @Description: 控制器
 */

// 引入 模型
const math = require('../models/math');
const file = require('../models/file');


/**
 * 处理首页
 */
exports.showIndex = (req, res) => {
    res.render('index');
};


/**
 * 计算一个数的所有因数
 */
exports.showResult = (req, res) => {
    // 获取参数
    let number = req.params.number;

    // 先尝试读取文件
    file.read(number, resultsArr => {
        if (resultsArr === -1) {
            // 文件不存在,  命令 math 模型来计算
            resultsArr = math.calc(number);

            // 写入文件
            file.save(number, resultsArr);
        }

        let data = {
            number,
            resultsArr
        };

        // 呈递视图
        res.render('number', data);
    });
};