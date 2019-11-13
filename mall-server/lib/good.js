const { knex, promisePool } = require('../config/index');

const object = {
    /* 查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查 */
    async listAllGood() {
        const allGood = await knex('good').select('*');
        return allGood || [];
    },

    async listAllValuableGood() {
        const good = await knex('good').where({deleted: false});
        return good;
    },

    async listAllDeletedGood() {
        const deletedGood = await knex('good').where({deleted: true});
        return deletedGood || [];
    },

    async listGoodByBossid(data) {
        const goods = await knex('good').where({deleted: false, boss_id: data});
        return goods || [];
    },

    async listValuableGoodByKeyword(data) {
        data = '%' + data + '%';
        const valuableGood = await knex('good').where(function () {
            if (data) {
                this.where('name', 'like', data);
                this.orWhere('description', 'like', data);
                this.orWhere('brand', 'like', data);
                this.orWhere('label', 'like', data);
            }
        });
        return valuableGood || [];
    },

    async getGoodByStoreId(data) {
        const storeGoods = await knex('good').where({deleted: false, store_id: data});
        return storeGoods || [];
    },

    async getGoodById(data) {
        const good = knex('good').where({deleted: false, id: data});
        return good || [];
    },

    /* 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增 */
    async addGood(data) {
        const insertData = {
            store_id: data[0],
            store_name: data[1],
            boss_id: data[2],
            boss_name: data[3],
            name: data[4],
            new_price: data[5],
            description: data[6],
            brand: data[7],
            img_1: data[8],
            img_2: data[9],
            img_3: data[10],
            img_4: data[11],
            img_5: data[12],
            label: data[13]
        };
        await knex('good').insert(insertData);
    },

    /* 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改 */
    async deleteGood(data) {
        await knex('good').update({deleted: true}).where({id: data});
    },

    async restoreGood(data) {
        await knex('good').update({deleted: false}).where({id: data});
    }


};

module.exports = object;
