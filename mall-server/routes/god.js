const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editGod = require('../lib/god');
const md5 = require('md5');

router.post("/view/addGod", async (ctx) => {
    const data = ctx.request.body;
    const usertype = data.usertype;
    const mobile = data.value.mobile;
    const godId = 'god-' + mobile;
    const username = data.value.username;
    const nickname = 'god-' + mobile;
    const email = data.value.email;
    const password = data.value.password;
    const date = new Date();
    const registerTime = date.toLocaleString();
    const data1 = [godId, username, nickname, password, mobile, registerTime, email];
    await editGod.addGod(data1);
    ctx.body = { msg: '添加用户成功' };
});



module.exports = router;