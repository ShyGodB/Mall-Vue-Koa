const Koa = require('koa');
const json = require('koa-json');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const formidable = require('koa2-formidable');

const godRouter_view = require('./routes/view/god');
const bossRouter_view = require('./routes/view/boss');
const indexRouter_view = require('./routes/view/index');

const godRouter_admin = require('./routes/admin/god');
const bossRouter_admin = require('./routes/admin/boss');
const storeRouter_admin = require('./routes/admin/store');
const goodRouter_admin = require('./routes/admin/good');



app.use(json());
app.use(formidable())
app.use(bodyParser());


app.use(godRouter_view.routes()).use(godRouter_view.allowedMethods());
app.use(bossRouter_view.routes()).use(bossRouter_view.allowedMethods());
app.use(indexRouter_view.routes()).use(indexRouter_view.allowedMethods());

app.use(godRouter_admin.routes()).use(godRouter_admin.allowedMethods());
app.use(bossRouter_admin.routes()).use(bossRouter_admin.allowedMethods());
app.use(storeRouter_admin.routes()).use(storeRouter_admin.allowedMethods());
app.use(goodRouter_admin.routes()).use(goodRouter_admin.allowedMethods());



app.listen(3000, async () => {
	console.log("Server is running at http://127.0.0.1:3000")
})
