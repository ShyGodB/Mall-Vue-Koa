const { knex, promisePool } = require('../config/index');

const object = {
    // 查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查
    async listAllBoss() {
        const boss =  await knex.select('*').from('boss');
        return boss;
    },

    async listAllValuableBoss() {
        const valuableBoss = await knex.select('*').from('boss').where({deleted: false});
        return valuableBoss;
    },

    async listAllDeletedBoss() {
        const deletedBoss = await knex.select('*').from('boss').where({deleted: true});
        return deletedBoss;
    },

    async bossLoginByEmail(data) {
        const boss = await knex('boss').where({email: data[0], password: data[1]});
        return boss;
    },

    async bossLoginByMobile(data) {
        const result = await knex('boss').where({mobile: data[0], password: data[1]});
        return result;
    },

    async bossLoginByUsername(data) {
        const result = await knex('boss').where({username: data[0], password: data[1]});
        return result;
    },

    async getBossByBossId(data) {
        const result = await knex('boss').where({deleted: false, boss_id: data[0]});
        return result;
    },

    async checkPassword(data) {
        const result = await knex('boss').where({deleted: false, password: data[0], id: data[1]});
        return result;
    },

    // 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增
    async addBoss(data) {
        const insertData = {
            boss_id: data[0],
            username: data[1],
            nickname: data[2],
            password: data[3],
            email: data[4],
            mobile: data[5],
            register_time: data[6],
            realname: data[7],
            idcard: data[8],
            businesslicense: data[9]
        }
        await knex('boss').insert(insertData);
    },

    // 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改
    async updatePassword(data) {
        await knex('boss').update({password: data[0]}).where({deleted: false, id: data[1]});
    },

    async deleteBoss(data) {
        await knex('boss').update({deleted: true}).where({id: data.id});
    },

    async restoreBoss(data) {
        await knex('boss').update({deleted: false}).where({id: data[0]});
    },

    async updateBossNickname(data) {
        await knex('boss').update({nickname: data[0]}).where({id: data[1]});
    },

    async updateBossGender(data) {
        await knex('boss').update({gender: data[0]}).where({id: data[1]});
    },

    async updateBossBirthday(data) {
        await knex('boss').update({birthday: data[0]}).where({id: data[1]});
    },

    async updateBossEmail(data) {
        await knex('boss').update({email: data[0]}).where({id: data[1]});
    },

    async updateBossMobile(data) {
        await knex('boss').update({mobile: data[0]}).where({id: data[1]});
    },

    async updateBossQQ(data) {
        await knex('boss').update({qq: data[0]}).where({id: data[1]});
    },

    async updateBossWechat(data) {
        await knex('boss').update({wechat: data[0]}).where({id: data[1]});
    },

    async updateBossWeibo(data) {
        await knex('boss').update({weibo: data[0]}).where({id: data[1]});
    },

    async updateBossBio(data) {
        await knex('boss').update({bio: data[0]}).where({id: data[1]});
    },

    async updateBossAvatar(data) {
        await knex('boss').update({avatar_url: data[0]}).where({id: data[1]});
    },

};

module.exports = object;
