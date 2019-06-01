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
    async listAllBoss() {
        const sql = 'select * from boss';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },

    async listAllValuableBoss() {
        const sql = 'select * from boss where deleted = 0';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
    },

    async listAllDeletedBoss() {
        const sql = 'select * from boss where deleted = 1';
        const [rows, fields] = await promisePool.query(sql);
        return rows;
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

    /* 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增 */
    async addBoss(data) {
        const sql = 'insert into boss(boss_id, username, nickname, password, email, mobile, register_time, realname, idcard, businesslicense) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    /* 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改 */
    async deleteBoss(data) {
        const sql = 'update boss set deleted = 1 where id = ?';
        await promisePool.query(sql, data);
    },

    async restoreBoss(data) {
        const sql = 'update boss set deleted = 0 where id = ?';
        await promisePool.query(sql, data);
    }

};

module.exports = object;
