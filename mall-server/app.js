const Koa = require('koa'); 
const json = require('koa-json');  
const path = require('path'); 
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const formidable = require('koa2-formidable')


app.use(formidable())


const godRouter = require('./routes/god');
const bossRouter = require('./routes/boss');
const adminRouter = require('./routes/admin');
const indexRouter = require('./routes/index');


app.use(json());
app.use(bodyParser());


app.use(godRouter.routes()).use(godRouter.allowedMethods());
app.use(bossRouter.routes()).use(bossRouter.allowedMethods());
app.use(adminRouter.routes()).use(adminRouter.allowedMethods());
app.use(indexRouter.routes()).use(indexRouter.allowedMethods());


app.listen(3000, async () => {
	console.log("Server is running at http://127.0.0.1:3000")
})
