const editBoss = require('../../../lib/boss');

module.exports = {
    async listAllValuableBoss(ctx, next) {
        ctx.body = await editBoss.listAllValuableBoss();
    },
    async deleteBoss(ctx, next) {
        const id = ctx.request.body.id;
        await editBoss.deleteBoss({id});
        ctx.body = {msg: '删除成功'};
    },
    async listAllDeletedBoss(ctx, next) {
        ctx.body = await editBoss.listAllDeletedBoss();
    },
    async restoreBoss(ctx, next) {
        const id = ctx.request.body.id;
        await editBoss.restoreBoss(id);
        ctx.body = { msg: '恢复成功' };
    }
};
