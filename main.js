const Koa = require('koa');
const Koa_Bodyparser = require("koa-bodyparser");
const {Config} = require("./Config");
const {File}  = require("./File");
const {Executor} = require("./Executor");
const Utils = require("./Utils");

const app = new Koa();              // 实例化app
const Bodyparser = Koa_Bodyparser();// 获取Post请求Body转换器
const conf = new Config(); // 配置文件



// 引用body解析中间件
app.use(Bodyparser)

// 路由配置
app.use(async ctx => {
    let requestUrl;
    if(ctx.url.indexOf("?")!=-1){
        requestUrl = ctx.url.substring(0,ctx.url.indexOf("?"));
    }else{
        requestUrl = ctx.url;
    }
    
    if(requestUrl !="/" && requestUrl!="/favicon.ico"){
        let file = new File(conf.filePath+requestUrl);

        if(await file.isExists()){

            // 写入参数供文件使用
            let configName = conf.filePath+requestUrl.substring(0,requestUrl.indexOf("."))+".json";
            let configContent = JSON.stringify(ctx.request.query);
            // console.log(ctx.request.query);
            let res = await Utils.writeConfig(configName,configContent);
            
            // 执行
            let executor = new Executor();
            ctx.body = await executor.run(file.fileUrl);

           

        }else{
            ctx.body = "文件不存在";
        };
    }else{
        ctx.body = "路径错误";
    }
    
});

app.listen(3000);

console.log("Koa成功运行在http://localhost:3000");