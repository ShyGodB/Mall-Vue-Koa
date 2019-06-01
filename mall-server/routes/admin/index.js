const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editGod = require('../../lib/god');
const editBoss = require('../../lib/boss');


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


module.exports = router;
