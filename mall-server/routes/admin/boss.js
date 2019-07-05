const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editBoss = require('../../lib/boss');


router.post("/admin/List-ValuableBoss-All", async (ctx) => {
    ctx.body = await editBoss.listAllValuableBoss();
});

router.post("/admin/deleteBoss", async (ctx) => {
    const id = ctx.request.body.id;
    await editBoss.deleteBoss(id);
    ctx.body = {msg: '删除成功'};
});
router.post("/admin/List-DeletedBoss-All", async (ctx) => {
    ctx.body = await editBoss.listAllDeletedBoss();
});

router.post("/admin/restoreBoss", async (ctx) => {
    const id = ctx.request.body.id;
    await editBoss.restoreBoss(id);
    ctx.body = { msg: '恢复成功' };
});


module.exports = router;
