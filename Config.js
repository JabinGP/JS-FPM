const fs = require("fs");
class Config{
    constructor(){
        // 获取配置文件 
        let configString = fs.readFileSync('./js-fpm.json');

        // 转为对象
        let config = JSON.parse(configString.toString());

        // 构建对象属性
        this.filePath = config.filePath;
    }
}
module.exports={
    Config:Config
}