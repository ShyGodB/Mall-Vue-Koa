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
    async listAllStore() {
        const sql = 'select * from store';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },

    async listAllValuableStore() {
        const sql = 'select *from store where deleted = 0';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },

    async listAllDeletedStore() {
        const sql = 'select * from store where deleted = 1';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },

    async getStore(data) {
        const sql = 'select * from store where boss_id=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },


    /* 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增 */
    async addStore(data) {
        const sql = 'insert into store(boss_id, name, type, nature) values(?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    /* 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改 */
    async deleteStore(data) {
        const sql = 'update store set deleted = 1 where id = ?';
        await promisePool.query(sql, data);
    },

    async restoreStore(data) {
        const sql = 'update store set deleted = 0 where id = ?';
        await promisePool.query(sql, data);
    }

};

module.exports = object;
