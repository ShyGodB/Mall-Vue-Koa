const editBoss = require('../../../lib/boss');
const editGood = require('../../../lib/good');


module.exports = {
    async listAllValuableGood(ctx, next) {
        ctx.body = await editGood.listAllValuableGood();
    },
    async deleteGood(ctx, next) {
        const id = ctx.request.body.id;
        await editGood.deleteGood(id);
        ctx.body = { msg: '删除成功' };
    },
    async listAllDeletedGood(ctx, next) {
        ctx.body = await editGood.listAllDeletedGood();
    },
    async restoreGood(ctx, next) {
        const id = ctx.request.body.id;
        await editGood.restoreGood(id);
        ctx.body = { msg: '恢复成功' };
    }
};
