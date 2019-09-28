const { knex, promisePool } = require('../config/index');

const object = {
    // 查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查
    async listAddressByGodId(data) {
        const address = await knex('address').where({god_id: data});
        return address;
    },

    // 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增
    async addAddress(data) {
        const sql = 'insert into address(god_id, name, area, address, mobile) values(?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
        const insertData = {
            god_id: data[0],
            name: data[1],
            area: data[2],
            address: data[3],
            mobile: data[4]
        };
        await knex('address').insert(insertData);
    },
};

module.exports = object;
