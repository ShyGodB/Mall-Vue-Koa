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
    },

    async getBossByBossId(data) {
        const sql = 'select * from boss where boss_id=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows[0];
    },

    async addStore(data) {
        const sql = 'insert into store(boss_id, name, type, nature) values(?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    async getStore(data) {
        const sql = 'select * from store where boss_id=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    async addGoodInfo(data) {
        const sql = 'insert into good(store_id, name, description, brand) values(?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    async addGoodImg(data) {
        const sql = 'insert into good(img_1, img_2, img_3, img_4, img_5, img_6) values(?, ?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    async getGood(data) {
        const sql = 'select * from good where store_id=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
1 }

};

module.exports = object;




