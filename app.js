'use strict';

const koa = require('koa');
const config = require('./config/config');
const views = require('koa-views')
const router = require('./router/router')
const staticFiles = require('koa-static')
const path = require('path')

const app = new koa()
app.use(views('views', { // 配置视图入口
  root: __dirname + '/views',
  extension: 'html',
}));

app.use(staticFiles(path.join(__dirname, 'public'))); // 配置静态文件路径
app.use(router.routes()); //配置router
app.listen(config.port, () => {
  console.log('应用已经启动，' + config.port);
});