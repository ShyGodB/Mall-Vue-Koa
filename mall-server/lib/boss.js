const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234qwer',
    database: 'mall'
});

const promisePool = pool.promise();

const object = {

    async listAllBoss() {
        const sql = 'select * from boss';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },

    async addBoss(data) {
        const sql = 'insert into boss(boss_id, username, nickname, password, email, mobile, register_time, realname, idcard, businesslicense) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    async bossLoginByEmail(data) {
        const sql = 'select * from boss where email=? and password=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    async bossLoginByMobile(data) {
        const sql = 'select * from boss where mobile=? and password=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    async bossLoginByUsername(data) {
        const sql = 'select * from boss where username=? and password=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    }

};

module.exports = object;




