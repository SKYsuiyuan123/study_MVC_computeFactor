// 计算一个数的因数
let mathFactor = (number) => {
    let resultArr = [];
    for (let i = 0; i <= number; i++) {
        if (number % i == 0) {
            resultArr.push(i);
        }
    }
    return resultArr;
};


module.exports = mathFactor;