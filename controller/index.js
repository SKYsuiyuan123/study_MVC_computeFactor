// 计算因数
const mathFactor = require('../models/mathFactor');
// 存储因数
const fileFactors = require('../models/fileFactor');
const fileFactor = new fileFactors();

class controller {

    // 计算一个数的因数
    computeFactor(req, res) {
        let date1 = new Date();
        let number = parseInt(req.body.number);

        // 先让 文件去读取
        fileFactor.read(number, (resultArr) => {
            if (resultArr == -1) {
                // -1 不存在该数据

                // 让 模型 mathFactor 来计算结果
                resultArr = mathFactor(number);
                fileFactor.save(number, resultArr);
            }

            let data = {
                msg: 'success',
                result: resultArr,
                errorcode: 0
            }

            let date2 = new Date();
            console.log(date2 - date1);
            res.json(data);
        })
    }
}




module.exports = controller;