const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editBoss = require('../lib/boss');

router.post("/view/addBoss", async (ctx) => {
    const data = ctx.request.body;
    const mobile = data.value.mobile;
    const boosId = 'boss-' + mobile;
    const nickname = 'boss-' + mobile;
    const username = data.value.username;
    const email = data.value.email;
    const password = data.value.password;
    const date = new Date();
    const registerTime = date.toLocaleString();
    const realname = data.value.realname;
    const idcard = data.value.idcard;
    const businesslicense = data.value.businesslicense;
    const data1 = [boosId, username, nickname, password, email, mobile, registerTime, realname, idcard, businesslicense];
    await editBoss.addBoss(data1);
    ctx.body = { msg: '添加店主成功' };
});



module.exports = router;