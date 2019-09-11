const editAddress = require('../../lib/address');
const editBoss = require('../../lib/boss');
const editCar = require('../../lib/car');
const editGod = require('../../lib/god');
const editGood = require('../../lib/good');


module.exports = {
    async addGood(ctx, next) {
        const files = ctx.req.files; //上传过来的文件
        const data = ctx.query;  // 上传的数据

        const img_1 = files[0].path;
        const img_2 = files[1].path;
        const img_3 = files[2].path;
        const img_4 = files[3].path;
        const img_5 = files[4].path;
        const store_id = data.store_id;
        const store_name = data.store_name;
        const boss_id = data.boss_id;
        const boss_name = data.boss_name;
        const name = data.name;
        const new_price = data.new_price;
        const description = data.description;
        const brand = data.brand;
        const label = data.label;

        const data1 = [store_id, store_name, boss_id, boss_name, name, new_price, description, brand, img_1, img_2, img_3, img_4, img_5, label];
        await editGood.addGood(data1);

        ctx.body = {msg: '添加成功'};
    },
    async getBossInfo(ctx, next) {
        const boss_id = ctx.request.body.boss_id;
        ctx.body = await editBoss.getBossByBossId(boss_id);
    },
    async listAllUser(ctx, next) {
        const listAllGodPromise = editGod.listAllGod();
        const listAllBossPromise = editBoss.listAllBoss();
        const listAllGod = await listAllGodPromise;
        const listAllBoss = await listAllBossPromise;
        ctx.body = {
            god: listAllGod,
            boss: listAllBoss
        }
    },
    async login(ctx, next) {
        const data = ctx.request.body;
        const username = data.username;
        const password = data.password;
        const data1 = [username, password];
        const godLoginMobilePromise = editGod.godLoginByMobile(data1);
        const godLoginUsernamePromise = editGod.godLoginByUsername(data1);
        const godLoginEmailPromise = editGod.godLoginByEmail(data1);
        const bossLoginMobilePromise = editBoss.bossLoginByMobile(data1);
        const bossLoginUsernamePromise = editBoss.bossLoginByUsername(data1);
        const bossLoginEmailPromise = editBoss.bossLoginByEmail(data1);
        const row1 = await godLoginMobilePromise;
        const row2 = await godLoginUsernamePromise;
        const row3 = await godLoginEmailPromise;
        const row4 = await bossLoginMobilePromise;
        const row5 = await bossLoginUsernamePromise;
        const row6 = await bossLoginEmailPromise;
        const array = [row1, row2, row3, row4, row5, row6];
        let onOff = false;
        let data2 = null;
        let token = '';
        for(let i = 0; i < array.length; i++) {
            if(array[i].length !== 0 ) {
                onOff = true;
                if(i > 2) {
                    token = 'boss';
                } else {
                    token = 'god';
                }
                data2 = array[i][0];
            }
        }
        if(onOff === false) {
            ctx.body = { msg: '登录失败'};
        } else {
            ctx.body = {
                msg: '登录成功',
                token: token,
                body: data2
            }
        }
    },
    async listAllGoodFromGood(ctx, next) {
        ctx.body = await editGood.listAllValuableGood();
    },
    async getGood(ctx, next) {
        const id = ctx.request.body.id;
        ctx.body = await editGood.getGoodById(id);
    },
    async listGoodFromCar(ctx, next) {
        const god_id = ctx.request.body.god_id;
        const rows = await editCar.listByGod_id(god_id);
        ctx.body = rows;
    },
    async listAllValuableGood(ctx, next) {
        const boss_id = ctx.request.body.boss_id;
        ctx.body = await editGood.listGoodByBossid(boss_id);
    },
    async listAllDeletedGood(ctx, next) {
        ctx.body = await editGood.listAllDeletedGood();
    },
    async listGoodByKeyword(ctx, next) {
        const keyword = ctx.request.body.keyword;
        ctx.body = await editGood.listValuableGoodByKeyword(keyword);
    },
    async listAddressByGodId(ctx, next) {
        const god_id = ctx.request.body.god_id;
        ctx.body = await editAddress.listAddressByGodId(god_id);
    }
}
