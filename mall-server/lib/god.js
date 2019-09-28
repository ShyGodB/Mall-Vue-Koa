const { knex, promisePool } = require('../config/index');

const object = {

    /* 查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查 */
    async listAllGod() {
        const allGod = await knex('god').select('*');
        return allGod || [];
    },

    async listAllValuableGod() {
        const valuableGood = await knex('god').where({deleted: false});
        return valuableGood || [];
    },

    async listAllDeletedGod() {
        const valuableGood = await knex('god').where({deleted: true});
        return valuableGood || [];
    },

    async getGodByGodid(data) {
        const god = await knex('god').where({deleted: false, god_id: data});
        return god || [];
    },

    async checkPassword(data) {
        return await knex('god').where({deleted: false, password: data[0], id: data[1]}) || [];
    },


    /* 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增 */
    async addGod(data) {
        const insertData = {
            god_id: data[0],
            username: data[1],
            nickname: data[2],
            password: data[3],
            mobile: data[4],
            register_time: data[5],
            email: data[6]
        };
        await knex('god').insert(insertData);
    },

    async godLoginByEmail(data) {
        return await knex('god').where({deleted: false, email: data[0], password: data[1]});
    },

    async godLoginByMobile(data) {
        return await knex('god').where({deleted: false, mobile: data[0], password: data[1]});
    },

    async godLoginByUsername(data) {
        return await knex('god').where({deleted: false, username: data[0], password: data[1]});
    },


    /* 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改 */
    async updatePassword(data) {
        await knex('god').update({password: data[0]}).where({deleted: false, id: data[1]});
    },

    async deleteGod(data) {
        await knex('god').update({deleted: true}).where({id: data});
    },

    async restoreGod(data) {
        await knex('god').update({deleted: false}).where({id: data});
    },

    async updateGodNickname(data) {
        await knex('god').update({nickname: data[0]}).where({id: data[1]});
    },

    async updateGodGender(data) {
        await knex('god').update({gender: data[0]}).where({id: data[1]});
    },

    async updateGodBirthday(data) {
        await knex('god').update({birthday: data[0]}).where({id: data[1]});
    },

    async updateGodEmail(data) {
        await knex('god').update({email: data[0]}).where({id: data[1]});
    },

    async updateGodMobile(data) {
        await knex('god').update({mobile: data[0]}).where({id: data[1]});
    },

    async updateGodQQ(data) {
        await knex('god').update({qq: data[0]}).where({id: data[1]});
    },

    async updateGodWechat(data) {
        await knex('god').update({wechat: data[0]}).where({id: data[1]});
    },

    async updateGodWeibo(data) {
        await knex('god').update({weibo: data[0]}).where({id: data[1]});
    },

    async updateGodBio(data) {
        await knex('god').update({bio: data[0]}).where({id: data[1]});
    },

    async updateGodIdcard(data) {
        await knex('god').update({idcard: data[0]}).where({id: data[1]});
    },

    async updateGodMarried(data) {
        await knex('god').update({married: data[0]}).where({id: data[1]});
    },

    async updateGodIncome(data) {
        await knex('god').update({income: data[0]}).where({id: data[1]});
    },

    async updateGodEducation(data) {
        await knex('god').update({education: data[0]}).where({id: data[1]});
    },

    async updateGodIndustry(data) {
        await knex('god').update({industry: data[0]}).where({id: data[1]});
    },

    // 修改头像
    async updateGodAvatar(data) {
        await knex('god').update({avatar_url: data[0]}).where({id: data[1]});
    },

};

module.exports = object;
