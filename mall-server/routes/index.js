const KoaRouter = require('koa-router');
const router = new KoaRouter();


router.get('/index', async ctx => {
    console.log(111);
    const data = ctx.request.body;
    console.log(data);
    ctx.body = {msg: '成功'}
})


module.exports = router;



