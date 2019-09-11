const editStore = require('../../../lib/store');

module.exports = {
    async listAllValuableStore(ctx, next) {
        ctx.body = await editStore.listAllValuableStore();
    },
    async deleteStore(ctx, next) {
        const id = ctx.request.body.id;
        await editStore.deleteStore(id);
        ctx.body = {msg: '删除成功'};
    },
    async listAllDeletedStore(ctx, next) {
        ctx.body = await editStore.listAllDeletedStore();
    },
    async restoreStore(ctx, next) {
        const id = ctx.request.body.id;
        await editStore.restoreStore(id);
        ctx.body = { msg: '恢复成功' };
    }
};
