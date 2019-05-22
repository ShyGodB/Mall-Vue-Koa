const Koa = require('koa');  
const app = new Koa();  
// const cors = require('cors');


// app.use(cors())

const indexRouter = require('./routes/index');


app.use(async (ctx) => {  
    ctx.body = "Hello World";  
});

app.use(indexRouter.routes()).use(indexRouter.allowedMethods());

app.listen(2828, () => { 
    console.log('Server is running at http://127.0.0.1:2828');
});
