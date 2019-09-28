const { knex, promisePool } = require('../config/index');

const object = {
    // 查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查
    async listAllStore() {
        const allStore = await knex('store').select('*');
        return allStore || [];
    },

    async listAllValuableStore() {
        const valuableStore = await knex('store').where({deleted: false});
        return valuableStore || [];
    },

    async listAllDeletedStore() {
        const deletedStore = await knex('store').where({deleted: true});
        return deletedStore || [];
    },

    async getStore(data) {
        const store = await knex('store').where({deleted: false, boss_id: data});
        return store || [];
    },

    // 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增
    async addStore(data) {
        const insertData = {
            boss_id: data[0],
            boss_name: data[1],
            name: data[2],
            type: data[3],
            nature: data[4]
        };
        await knex('store').insert(insertData);
    },

    // 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改
    async deleteStore(data) {
        await knex('store').update({deleted: true}).where({id: data});
    },

    async restoreStore(data) {
        await knex('store').update({deleted: false}).where({id: data});
    }

};

module.exports = object;
