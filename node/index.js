var path= require('path')

var App= require('koa')
var AppStatic= require('koa-static')
var AppBodyparser= require('koa-bodyparser')
var AppLogger= require('koa-logger')



var app= module.exports= new App

app.use(AppStatic(path.resolve(__dirname,'../release')))

app.use(AppLogger())

app.use(AppBodyparser())
