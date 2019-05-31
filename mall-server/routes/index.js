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
    const array = [row1, row2, row3, row4, row5, row6];
    let onOff = false;
    let data2 = null;
    for(let i = 0; i < array.length; i++) {
        if(array[i].length !== 0 ) {
            onOff = true;
            data2 = array[i][0];
        } 
    }
    if(onOff === false) {
        ctx.body = { msg: '登录失败'};
    } else {
        ctx.body = {
            msg: '登录成功',
            token: '已登陆',
            body: data2
        }
    }
});

module.exports = router;