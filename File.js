const fs = require("fs");
class File{
    constructor(fileUrl){
        let urlArr = fileUrl.split("/");
        let fileFullName =  urlArr[urlArr.length-1]; 
        this.fileUrl = fileUrl;
        this.fileFullName = fileFullName;
    }
    async isExists(){
        let nameArr = this.fileFullName.split(".");
        if(nameArr.length!=2 || nameArr[1]!="js" || nameArr[0]==""){
            return false;
        }else{
            return await access(this.fileUrl).then(()=>{
                return true;
            }).catch((err)=>{
                console.log(err);
                return false;
            });
        }
        
    }

}

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
module.exports={
    File:File
}