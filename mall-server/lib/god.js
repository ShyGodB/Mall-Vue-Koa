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

    async getGodByGodid(data) {
        const sql = 'select * from god where deleted = 0 and god_id = ?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    async checkPassword(data) {
        const sql = 'select * from god where deleted = 0 and password=? and id = ?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },


    /* 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增 */
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
    async updatePassword(data) {
        const sql = 'update god set password = ? where deleted = 0 and id = ?';
        await promisePool.query(sql, data);
    },
    
    async deleteGod(data) {
        const sql = 'update god set deleted = 1 where id = ?';
        await promisePool.query(sql, data);
    },

    async restoreGod(data) {
        const sql = 'update god set deleted = 0 where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodNickname(data) {
        const sql = 'update God set nickname = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodGender(data) {
        const sql = 'update God set Gender = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodBirthday(data) {
        const sql = 'update God set Birthday = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodEmail(data) {
        const sql = 'update God set Email = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodMobile(data) {
        const sql = 'update God set Mobile = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodQQ(data) {
        const sql = 'update God set qq = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodWechat(data) {
        const sql = 'update God set wechat = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodWeibo(data) {
        const sql = 'update God set weibo = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodBio(data) {
        const sql = 'update God set bio = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodIdcard(data) {
        const sql = 'update God set idcard = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodMarried(data) {
        const sql = 'update God set married = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodIncome(data) {
        const sql = 'update God set income = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodEducation(data) {
        const sql = 'update God set education = ? where id = ?';
        await promisePool.query(sql, data);
    },

    async updateGodIndustry(data) {
        const sql = 'update God set industry = ? where id = ?';
        await promisePool.query(sql, data);
    },

    // 修改头像
    async updateGodAvatar(data) {
        const sql = 'update god set avatar_url = ? where id = ?';
        await promisePool.query(sql, data);
    },

};

module.exports = object;
