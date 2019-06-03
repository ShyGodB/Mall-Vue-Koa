const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234qwer',
    database: 'mall'
});

const promisePool = pool.promise();

const object = {
    /* 查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查 */
    async listByGod_id(data) {
        const sql = 'select * from car where god_id = ?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    /* 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增 */
    async addById(data) {
        const sql = 'insert into car(god_id, good_id, store_id, store_name, name, num, old_price, new_price, subtotal, description, img) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    /* 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改 */
    async updateByIdByGod_id(data) {
        const sql = 'update car set num = ?, subtotal = ? where id = ?';
        await promisePool.query(sql, data);
    },

    /* 删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删删 */
    async deleteById(data) {
        const sql = 'delete from car where id = ?';
        await promisePool.query(sql, data);
    },
};

module.exports = object;
