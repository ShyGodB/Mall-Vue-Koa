const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editBoss = require('../../lib/boss');
const multer = require('koa-multer');
const upload = multer({ dest: 'public/uploads/' });
const formidable = require('formidable');

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

router.post("/view/getbossinfo", async (ctx) => {
    const boss_id = ctx.request.body.boss_id;
    ctx.body = await editBoss.getBossByBossId(boss_id);
});

router.post("/view/addstore", async (ctx) => {
    const data = ctx.request.body;
    const boss_id = data.boss_id;
    const rows = await editBoss.getStore(boss_id);
    if(rows.length !== 0) {
        ctx.body = { msg: '创建失败，当前只允许店主拥有一个店铺，有疑问请咨询工作人员！' };
    } else {
        const data1 = [data.boss_id, data.name, data.type, data.nature];
        await editBoss.addStore(data1);
        ctx.body = { msg: '恭喜你，创建成功！' };
    }
});

router.post("/view/getstore", async (ctx) => {
    const data = ctx.request.body;
    const boss_id = data.boss_id;
    const rows = await editBoss.getStore(boss_id);
    if (rows.length === 0) {
        ctx.body = { msg: '尚未创建店铺！' };
    } else {
        ctx.body = rows[0];
    }
});

router.post("/view/addgoodinfo",  async (ctx) => {
    const data = ctx.request.body;
    const name = data.name;
    const price = data.price;
    const description = data.description;
    const brand = data.brand;
    ctx.body = {msg: 'ok'};
});

router.post("/view/getgood", async (ctx) => {
    const data = ctx.request.body.store_id;
    const rows = await editBoss.getGood(data);
    ctx.body = rows;
});


module.exports = router;
