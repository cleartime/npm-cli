#!/usr/bin/env node
const program = require('commander')
program
    .version('0.1.2') // 可下 -V 查詢版本
    .description('這裡可以是一個說明')
    .option('-a, --aArgv', '新增a參數','333') // 可下 -a 設定 program.aArgv 為 true
    .option('-b, --bArgv', '新增b參數') // 可下 -b 設定 program.bArgv 為 true
    .option('-c, --cArgv [type]', '新增c變數內容', 'test123') // 可下 -c 帶內容 設定 program.bArgv 預設值為 test123
//定義一個 deploy 命令，並傳入name參數
program
    .command('deploy <name>')
    .description('定義一個命令')
    .action(function(name) {
        console.log('Deploying "%s"', name)
    })
program.parse(process.argv)
//列印出各個傳入參數
// console.log('  - %s aArgv', program.aArgv)
// console.log('  - %s bArgv', program.bArgv)
// console.log('  - %s cArgv', program.cArgv)
// console.log('heiheihei')


var express = require('express');
var app = express();


app.get('/', function (req, res) {  
   res.send('register');
});
 
app.listen(3001);


//自动打开chrome浏览器
var opn=require('opn');
opn('http://www.guixiaoxiao.cn/'); 
