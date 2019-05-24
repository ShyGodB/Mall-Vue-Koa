const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editGod = require('../lib/god');
const md5 = require('md5');

router.post("/view/addGod", async (ctx) => {
    const data = ctx.request.body;
    const mobile = data.value.mobile;
    const username = 'god-' + mobile;
    const nickname = data.value.nickname;
    const email = data.value.email;
    const password = data.value.mobile;
    const date = new Date();
    const registerTime = date.toLocaleString();
    const data1 = [username, nickname, password, mobile, registerTime, email];
    await editGod.addGod(data1);
    ctx.body = { msg: '添加用户成功' };
});



module.exports = router;