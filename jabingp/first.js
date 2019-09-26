const fs = require("fs");
const fileFullName = __filename;
const filePath = __dirname;
const urlArr =  fileFullName.split("/");
const fileName = urlArr[urlArr.length-1];
const configName = fileName.substring(0,fileName.indexOf("."))+".json";

async function access(fileUrl){
    return new Promise ((resolve,reject)=>{
        fs.access(fileUrl, (err)=> {
            if(err){
                reject(err);
            }else{
                resolve();
            }
        });
    });
}

async function readConfig(){
    console.log(filePath+"/"+configName);
    let flag = await access(filePath+"/"+configName).then(()=>{
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
        console.log(`received name = ${param.name} + number = ${param.number}`);

    }else{
        console.log("参数错误");
    }
})


