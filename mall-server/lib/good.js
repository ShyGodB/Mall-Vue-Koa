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
    async listAllGood() {
        const sql = 'select * from good';
        const [rows, fields] = await promisePool.query(sql);
        return rows.length;
    },

    async listAllValuableGood() {
        const sql = 'select * from good where deleted = 0';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },

    async listAllDeletedGood() {
        const sql = 'select * from good where deleted = 1';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },
    
    async getGoodByStoreId(data) {
        const sql = 'select * from good where store_id=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    async getGoodById(data) {
        const sql = 'select * from good where id=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    /* 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增 */
    async addGood(data) {
        const sql = 'insert into good(store_id, store_name, boss_id, boss_name, name, new_price, description, brand, img_1, img_2, img_3, img_4, img_5) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    /* 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改 */
    async deleteGood(data) {
        const sql = 'update good set deleted = 1 where id = ?';
        await promisePool.query(sql, data);
    },

    async restoreGood(data) {
        const sql = 'update good set deleted = 0 where id = ?';
        await promisePool.query(sql, data);
    }


};

module.exports = object;

