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
       for(let i =0 ;i<100;i++){
	    console.log(`${i}: get name = ${param.name} and number = ${param.number}`);
	}
    }else{
        console.log("参数错误");
    }
})


