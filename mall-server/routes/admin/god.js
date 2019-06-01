const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editGod = require('../../lib/god');
const md5 = require('md5');

router.post("/admin/List-ValuableGod-All", async (ctx) => {
    ctx.body = await editGod.listAllValuableGod();
})

router.post("/admin/deleteGod", async (ctx) => {
    console.log(111);
    
    const id = ctx.request.body.id;
    await editGod.deleteGod(id);
    ctx.body = {msg: '删除成功'};
});

router.post("/admin/List-DeletedGod-All", async (ctx) => {
    ctx.body = await editGod.listAllDeletedGod();
})

router.post("/admin/restoreGod", async (ctx) => {
    const id = ctx.request.body.id;
    await editGod.restoreGod(id);
    ctx.body = { msg: '恢复成功' };
});

module.exports = router;
