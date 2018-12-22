/*
 * @Author: sky
 * @Date: 2018-12-22 19:04:25
 * @Description: 计算模块
 */

/**
 * 计算一个数的所有因数,并且以数组的形式返回
 */
exports.calc = number => {
    // 在这里计算
    let resultsArr = [];

    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            resultsArr.push(i);
        }
    }

    // 返回数据
    return resultsArr;
}