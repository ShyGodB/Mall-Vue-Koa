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
    }

};

module.exports = object;



