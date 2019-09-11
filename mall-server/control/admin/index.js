const editBoss = require('../../lib/boss');
const editStore = require('../../lib/store');
const editGood = require('../../lib/good');
const editGod = require('../../lib/god');


module.exports = {
    async listAllValuableData(ctx, next) {
        const listBossPromise = editBoss.listAllValuableBoss();
        const listStorePromise = editStore.listAllValuableStore();
        const listGoodPromise = editGood.listAllValuableGood();
        const listGodPromise = editGod.listAllValuableGod();
        const rows1 = await listBossPromise;
        const rows2 = await listStorePromise;
        const rows3 = await listGoodPromise;
        const rows4 = await listGodPromise;
        ctx.body = [rows1.length, rows2.length, rows3.length, rows4.length];
    }
};
