const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editBoss = require('../lib/boss');

router.post("/view/addBoss", async (ctx) => {
    const data = ctx.request.body;
    const mobile = data.value.mobile;
    const username = 'boss-' + mobile;
    const nickname = data.value.nickname;
    const email = data.value.email;
    const password = data.value.password;
    const date = new Date();
    const registerTime = date.toLocaleString();
    const realname = data.value.realname;
    const idcard = data.value.idcard;
    const businesslicense = data.value.businesslicense;
    const data1 = [username, nickname, password, mobile, registerTime, realname, idcard, businesslicense, email];
    await editBoss.addBoss(data1);
    ctx.body = { msg: '添加店主成功' };
});



module.exports = router;