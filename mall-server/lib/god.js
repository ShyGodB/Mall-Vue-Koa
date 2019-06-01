const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234qwer',
    database: 'mall'
});

const promisePool = pool.promise();

const object = {

    async listAllGod() {
        const sql = 'select * from god';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },

    async listAllValuableGod() {
        const sql = 'select * from god where deleted = 0';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },

    async listAllDeletedGod() {
        const sql = 'select * from god where deleted = 1';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },

    async addGod(data) {
        const sql = 'insert into god(god_id, username, nickname, password, mobile, register_time, email) values(?, ?, ?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    async godLoginByEmail(data) {
        const sql = 'select * from god where email=? and password=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    async godLoginByMobile(data) {
        const sql = 'select * from god where mobile=? and password=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    async godLoginByUsername(data) {
        const sql = 'select * from god where username=? and password=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    /* 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改 */
    async deleteGod(data) {
        const sql = 'update god set deleted = 1 where id = ?';
        await promisePool.query(sql, data);
    },

    async restoreGod(data) {
        const sql = 'update god set deleted = 0 where id = ?';
        await promisePool.query(sql, data);
    }

};

module.exports = object;
