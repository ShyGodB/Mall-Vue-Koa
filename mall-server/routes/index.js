const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editGod = require('../lib/god');
const editBoss = require('../lib/boss');


router.post("/view/listAllUser", async (ctx) => {
    const listAllGodPromise = editGod.listAllGod();
    const listAllBossPromise = editBoss.listAllBoss();
    const listAllGod = await listAllGodPromise;
    const listAllBoss = await listAllBossPromise;
    ctx.body = {
        god: listAllGod,
        boss: listAllBoss
    }
});

router.post("/view/login", async (ctx) => {
    const data = ctx.request.body;
    const username = data.username;
    const password = data.password;
    const data1 = [username, password];
    const godLoginMobilePromise = editGod.godLoginByMobile(data1);
    const godLoginUsernamePromise = editGod.godLoginByUsername(data1);
    const godLoginEmailPromise = editGod.godLoginByEmail(data1);
    const bossLoginMobilePromise = editBoss.bossLoginByMobile(data1);
    const bossLoginUsernamePromise = editBoss.bossLoginByUsername(data1);
    const bossLoginEmailPromise = editBoss.bossLoginByEmail(data1);
    const row1 = await godLoginMobilePromise;
    const row2 = await godLoginUsernamePromise;
    const row3 = await godLoginEmailPromise;
    const row4 = await bossLoginMobilePromise;
    const row5 = await bossLoginUsernamePromise;
    const row6 = await bossLoginEmailPromise;
    if( row1.length !== 0 ||
        row2.length !== 0 ||
        row3.length !== 0 ||
        row4.length !== 0 ||
        row5.length !== 0 ||
        row6.length !== 0 ) {
            ctx.body = { msg: '登录成功'};
        } else {
            ctx.body = { msg: '登录失败'};
        }
    
});

module.exports = router;