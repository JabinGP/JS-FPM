const fs = require("fs");
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

function writeConfig(fileUrl,fileString){
    return new Promise((resolve,reject)=>{
        fs.writeFile(fileUrl, fileString, function(err) {
            if (err) {
                reject(err);
            }
            resolve("写入成功");
        });
    });
}

module.exports={
    access:access,
    writeConfig:writeConfig
}