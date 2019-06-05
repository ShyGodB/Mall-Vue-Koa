const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editGood = require('../../lib/good');
const md5 = require('md5');

router.post("/admin/List-ValuableGood-All", async (ctx) => {
    ctx.body = await editGood.listAllValuableGood();
})

router.post("/admin/deleteGood", async (ctx) => {
    const id = ctx.request.body.id;
    await editGood.deleteGood(id);
    ctx.body = { msg: '删除成功' };
});

router.post("/admin/List-DeletedGood-All", async (ctx) => {
    ctx.body = await editGood.listAllDeletedGood();
})

router.post("/admin/restoreGood", async (ctx) => {
    const id = ctx.request.body.id;
    await editGood.restoreGood(id);
    ctx.body = { msg: '恢复成功' };
});

module.exports = router;
