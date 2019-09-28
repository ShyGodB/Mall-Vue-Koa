const { knex, promisePool } = require('../config/index');

const object = {
    // 查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查
    async listByGod_id(data) {
        const car = await knex('car').where({god_id: data});
        return car;
    },

    // 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增
    async addById(data) {
        const insertData = {
            god_id: data[0],
            good_id: data[1],
            store_id: data[2],
            store_name: data[3],
            name: data[4],
            num: data[5],
            old_price: data[6],
            new_price: data[7],
            subtotal: data[8],
            description: data[9],
            img: data[10]
        };
        await knex('car').insert(insertData);
    },

    // 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改
    async updateByIdByGod_id(data) {
        await knex('car').update({
            num: data[0],
            subtotal: data[1]
        }).where({id: data[2]});
    },

    // 删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删
    async deleteById(data) {
        await knex('car').del({id: data});
    },
};

module.exports = object;
