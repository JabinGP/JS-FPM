const Utils = require("./Utils.js");
const fs = require("fs");
const fileFullName = __filename;
const filePath = __dirname;
const urlArr =  fileFullName.split("/");
const fileName = urlArr[urlArr.length-1];
const configName = fileName.substring(0,fileName.indexOf("."))+".json";


async function readConfig(){
    
    let flag = await Utils.access(filePath+"/"+configName).then(()=>{
        return true;
    }).catch((err)=>{
        console.log(err);
        return false;
    });
    if(flag){
        let param =  fs.readFileSync(filePath+"/"+configName);
        return param;
    }
}

readConfig().then((data)=>{
    if(data){
        let param = JSON.parse(data.toString());
      //  console.log(param);
        console.log(`这是一个示例文件`);

    }else{
        console.log("参数错误");
    }
    

})


