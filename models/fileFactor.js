const fs = require('fs');

// 处理文件

class fileFactor {

    // 写入数据
    save(number, resultArr) {
        fs.readFile('./dataList/numberFactor.json', (err, data) => {
            if (err) {
                console.log(err);
                console.log('读取失败');
            } else {
                let datas = JSON.parse(data);
                let flag = false; // 是否 重复了
                if (datas.numbers == undefined) {
                    datas = {
                        numbers: [{
                            number: number,
                            result: resultArr
                        }]
                    }
                } else {
                    datas.numbers.push({
                        number: number,
                        result: resultArr
                    });
                    // 去重
                    for (let i = 0; i < datas.numbers.length; i++) {
                        for (let j = 0; j < datas.numbers.length; j++) {
                            if (datas.numbers[i].number == datas.numbers[j].number && i != j) {
                                datas.numbers.splice(j, 1);
                                flag = true;
                            }
                        }
                    }
                }

                if (flag == false) {
                    datas = JSON.stringify(datas);
                    fs.writeFile('./dataList/numberFactor.json', datas, (err) => {
                        if (err) {
                            console.log(err);
                            console.log('存储失败');
                        } else {
                            console.log('存储成功');
                        }
                    });
                }
            }
        })
    };

    // 读取数据
    read(number, callback) {
        fs.readFile('./dataList/numberFactor.json', (err, data) => {
            if (err) {
                console.log(err);
                callback(-1);
                return;
            }
            data = JSON.parse(data);

            if (data.numbers == undefined) {
                callback(-1);
                return;
            } else {
                for (let i = 0; i < data.numbers.length; i++) {
                    if (number == data.numbers[i].number) {
                        data = data.numbers[i];
                        break;
                    } else {
                        if (i == data.numbers.length - 1) {
                            callback(-1);
                            return;
                        }
                    }
                }
                // 当数据 读取错误 / 不存在一条数据 / 查询的数据不存在  时 都会返回 -1 去计算
            }
            // 异步的数据必须通过回调函数保存  return 保存会报错
            callback(data);
        })
    }
}



module.exports = fileFactor;