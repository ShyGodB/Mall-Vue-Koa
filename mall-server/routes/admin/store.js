const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editStore = require('../../lib/store');


router.post("/admin/List-ValuableStore-All", async (ctx) => {
    ctx.body = await editStore.listAllValuableStore();
});

router.post("/admin/deleteStore", async (ctx) => {
    const id = ctx.request.body.id;
    await editStore.deleteStore(id);
    ctx.body = {msg: '删除成功'};
});

router.post("/admin/List-DeletedStore-All", async (ctx) => {
    ctx.body = await editStore.listAllDeletedStore();
});

router.post("/admin/restoreStore", async (ctx) => {
    const id = ctx.request.body.id;
    await editStore.restoreStore(id);
    ctx.body = { msg: '恢复成功' };
});


module.exports = router;
