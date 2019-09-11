const editGod = require('../../../lib/god');


module.exports = {
    async listAllValuableGod(ctx, next) {
        ctx.body = await editGod.listAllValuableGod();
    },
    async deleteGod(ctx, next) {
        const id = ctx.request.body.id;
        await editGod.deleteGod(id);
        ctx.body = {msg: '删除成功'};
    },
    async listAllDeletedGod(ctx, next) {
        ctx.body = await editGod.listAllDeletedGod();
    },
    async restoreGod(ctx, next) {
        const id = ctx.request.body.id;
        await editGod.restoreGod(id);
        ctx.body = { msg: '恢复成功' };
    }
};
