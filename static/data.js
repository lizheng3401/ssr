let fs = require('fs'); //文件模块
let path = require('path'); //系统路径模块

let tableData = []
for (let i = 0; i < 8000; i++) {
    tableData.push({
        id: i+1,
        date: "2018-11-28",
        name: "vine",
        address: "四川省成都市电子科技大学沙河小区",
    })           
}
let content = JSON.stringify(tableData)

let file = path.join(__dirname, 'test.json'); 
fs.writeFile(file, content, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log('文件创建成功，地址：' + file);
});