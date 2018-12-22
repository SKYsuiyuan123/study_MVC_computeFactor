/*
 * @Author: sky
 * @Date: 2018-12-22 19:17:19
 * @Description: 文件读写模块
 */
const fs = require('fs');
const path = require('path');


/**
 * 保存数据到文件中
 */
exports.save = (number, resultsArr) => {
    // 文件存入路径
    let saveUrl = path.join('./data/', number + '.txt');

    fs.writeFile(saveUrl, JSON.stringify(resultsArr), err => {
        if (err) {
            console.log(err);
        } else {
            console.log('文件存入成功');
        }
    });
}


/**
 * 从文件中读取数据
 */
exports.read = (number, callback) => {
    // 文件读取路径
    let readUrl = path.join('./data/', number + '.txt');

    fs.readFile(readUrl, (err, data) => {
        if (err) {
            callback(-1);
            return;
        } else {
            callback(JSON.parse(data));
        }
    });
}