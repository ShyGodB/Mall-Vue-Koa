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
        const sql = 'select * from boss where deleted = 0 and boss_id=?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows[0];
    },

    async checkPassword(data) {
        const sql = 'select * from boss where deleted = 0 and password=? and id = ?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    /* 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增 */
    async addBoss(data) {
        const sql = 'insert into boss(boss_id, username, nickname, password, email, mobile, register_time, realname, idcard, businesslicense) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    /* 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改 */
    async updatePassword(data) {
        const sql = 'update boss set password = ? where deleted = 0 and id = ?';
        await promisePool.query(sql, data);
    },

    async deleteBoss(data) {
        const sql = 'update boss set deleted = 1 where id = ?';
        await promisePool.query(sql, data);
    },

    async restoreBoss(data) {
        const sql = 'update boss set deleted = 0 where id = ?';
        await promisePool.query(sql, data);
    },

    async updateBossNickname(data) {
        const sql = 'update boss set nickname = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateBossGender(data) {
        const sql = 'update boss set Gender = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateBossBirthday(data) {
        const sql = 'update boss set Birthday = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateBossEmail(data) {
        const sql = 'update boss set Email = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateBossMobile(data) {
        const sql = 'update boss set Mobile = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateBossQQ(data) {
        const sql = 'update boss set qq = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateBossWechat(data) {
        const sql = 'update boss set wechat = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateBossWeibo(data) {
        const sql = 'update boss set weibo = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateBossBio(data) {
        const sql = 'update boss set bio = ? where id = ?';
        await promisePool.query(sql, data);
    },

    // 修改头像
    async updateBossAvatar(data) {
        const sql = 'update boss set avatar_url = ? where id = ?';
        await promisePool.query(sql, data);
    },

};

module.exports = object;
