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
        console.log(param);
        console.log(`[
            {
                "u_nickname": "unknow",
                "c_id": 48,
                "c_title": "素数环",
                "c_time": "2019-07-02T13:39:42.000Z",
                "c_class": "C++",
                "c_code": "#include <iostream>\n#include <cmath>\n\n#define N 20\nusing namespace std;\n\nvoid place(int i);\nint check1(int j,int i);\nint check2(int x);\nint check3(int j,int i);\nvoid output();\nint a[50]={0};\nint c=0;\n"
            },
            {
                "u_nickname": "unknow",
                "c_id": 49,
                "c_title": "高位到低位输出",
                "c_time": "2019-07-02T13:46:01.000Z",
                "c_class": "C++",
                "c_code": "#include <iostream>\nusing namespace std;\nvoid showNumber(int number){\n    if(number <1)return;\n\n    showNumber(number/10);\n\n    cout<<number%10<<endl;;\n}\n\nint main(){\n    int n;\n\n    cout << \"请输入n的值\" "
            },
            {
                "u_nickname": "unknow",
                "c_id": 50,
                "c_title": "百钱百鸡问题",
                "c_time": "2019-07-02T16:44:20.000Z",
                "c_class": "C++",
                "c_code": "// 百钱百鸡问题\n// 鸡翁一，值钱五、鸡母一，值钱三、鸡雏三，值钱一；\n#include <iostream>\nusing namespace std;\n\n\nint main(){\n    int priceX = 5;\n    int priceY = 3;\n    int aimSum = 100;\n    for(int x=1;x<=20;x++){     // 遍历所有可能的鸡翁\n"
            },
            {
                "u_nickname": "unknow",
                "c_id": 53,
                "c_title": "大数阶乘算法",
                "c_time": "2019-07-02T18:14:59.000Z",
                "c_class": "C++",
                "c_code": "#include <iostream>\nusing namespace std;\n\n// numLen 用于计算数字的实际长度\nint numLen(long number){\n    int len=0;\n    while(number>=1){\n        len++;\n        number /=10;\n    }\n    return len;\n}\n\nint main(){\n "
            },
            {
                "u_nickname": "unknow",
                "c_id": 54,
                "c_title": "动态规划求组合数Java实现",
                "c_time": "2019-07-02T18:17:58.000Z",
                "c_class": "Java",
                "c_code": "package Lesson05;\n\nimport java.util.HashMap;\n\npublic class DpCombine {\n    /**\n     * 动态规划结果集 string->long\n     */\n    public static HashMap<String,Long> resultMap = new HashMap<>();\n\n    /**\n     * 求"
            },
            {
                "u_nickname": "unknow",
                "c_id": 58,
                "c_title": "Go数据库操作",
                "c_time": "2019-07-04T12:51:10.000Z",
                "c_class": "Go",
                "c_code": "package main\n\nimport (\n\t// \"database/sql\"  原生数据库引擎\n\t\"fmt\"\n\n\t\"./sqls\"                           // sql语句\n\t\"./types\"                          // 自定义类型\n\t_ \"github.com/go-sql-driver/mysql\" // msyql数据库实现\n\t"
            },
            {
                "u_nickname": "unknow",
                "c_id": 65,
                "c_title": "数据库表结构",
                "c_time": "2019-07-07T15:36:10.000Z",
                "c_class": "SQL",
                "c_code": "users \n\nu_id varchar(11) 学号\nu_name varchar(11)姓名\nu_gender int 性别\nu_passwd varchar(50)密码\nu_avatar varchar(100)头像\nu_brief text 简介\nu_campus  int  校区\nu_phone   varchar(11)  电话号码\nu_permission int 权限\n\n\ncomm"
            },
            {
                "u_nickname": "unknow",
                "c_id": 66,
                "c_title": "数据库表结构",
                "c_time": "2019-07-08T05:26:12.000Z",
                "c_class": "SQL",
                "c_code": "mysql> desc users;\n+--------------+--------------+------+-----+---------+-------+\n| Field        | Type         | Null | Key | Default | Extra |\n+--------------+--------------+------+-----+---------+-"
            },
            {
                "u_nickname": "unknow",
                "c_id": 67,
                "c_title": "ss",
                "c_time": "2019-07-09T16:09:09.000Z",
                "c_class": "XML",
                "c_code": "ss"
            },
            {
                "u_nickname": "unknow",
                "c_id": 68,
                "c_title": "ip",
                "c_time": "2019-07-17T09:00:22.000Z",
                "c_class": "Apache",
                "c_code": " 149.129.122.207"
            },
            {
                "u_nickname": "unknow",
                "c_id": 69,
                "c_title": "ts链接",
                "c_time": "2019-08-05T08:41:54.000Z",
                "c_class": "Apache",
                "c_code": "http://mydown.yesky.com/pcsoft/464090.html"
            },
            {
                "u_nickname": "unknow",
                "c_id": 70,
                "c_title": "cssgo",
                "c_time": "2019-08-05T09:08:39.000Z",
                "c_class": "C#",
                "c_code": "-noforcemaccel -noforcemparms -noforcemspd -console -novid -tickrate 128 -perfectworld"
            },
            {
                "u_nickname": "unknow",
                "c_id": 73,
                "c_title": "java",
                "c_time": "2019-09-02T07:46:46.000Z",
                "c_class": "Java",
                "c_code": "实验一 经典软件体系结构风格(一)\n实验目的\n\t（1）理解管道-过滤器软件体系结构、面向对象软件体系结构的原理\n\t（2）掌握管道-过滤器软件体系结构、面向对象软件体系结构的实例\n\t（3）管道-过滤器软件体系结构、面向对象软件体系结构的编程实现\n实验内容\n1．管道-过滤器软件体系结构（概念可以参考教材P51）\n（1）在dos提示符下输入下面的命令：\ndir | more\n使得当前目录列表在屏幕上逐屏"
            },
            {
                "u_nickname": "unknow",
                "c_id": 74,
                "c_title": "ssr",
                "c_time": "2019-09-03T06:43:37.000Z",
                "c_class": "Apache",
                "c_code": "https://gettheconfig.oldsong.xyz/link/rG6ZY9u4uocbz0hg"
            },
            {
                "u_nickname": "unknow",
                "c_id": 75,
                "c_title": "idea",
                "c_time": "2019-09-11T03:32:03.000Z",
                "c_class": "Bash",
                "c_code": "https://www.jetbrains.com/shop/eform/students/request?code=e3e3pv60ihtarcmoozgym0kgl"
            },
            {
                "u_nickname": "unknow",
                "c_id": 76,
                "c_title": "nginx配置",
                "c_time": "2019-09-24T08:11:05.000Z",
                "c_class": "Nginx",
                "c_code": "jabin@jabin-deepin:/etc/nginx$ cat copy_nginx.conf \nuser www-data;\nworker_processes auto;\npid /run/nginx.pid;\ninclude /etc/nginx/modules-enabled/*.conf;\n\nevents {\n\tworker_connections 768;\n\t# multi_acc"
            }
        ]`);

    }else{
        console.log("参数错误");
    }
    

})


