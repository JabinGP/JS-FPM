class Executor{
    
    async run(fileUrl){
        return await spawn(fileUrl).then((data)=>{
           // console.log(data);
            return data;
        }).catch((err)=>{
            // console.log(err);
            return err;
        });
    }
}

function spawn(fileUrl){
    return new Promise((resolve,reject)=>{
        const process = require('process');
        const spawn = require('child_process').spawn;
        let spawnObj = spawn("node",[fileUrl]);
        // {
        //     stdio: 'inherit',
        //     // 仅在当前运行环境为 Windows 时，才使用 shell
        //     shell: process.platform === 'win32'
        // }
        let result="";
        spawnObj.stdout.on("data",(data)=>{
            result+=data.toString();
            // console.log(data.toString());
        })
    
        spawnObj.stderr.on('err',(err) => {
            console.log(err);
            reject(err);
        });
    
        spawnObj.on('exit',(code) => {
            resolve(result);
            console.log(`exit code is ${code}`);
        });

    });
    

}
module.exports = {
    Executor:Executor
}