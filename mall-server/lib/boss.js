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
        const sql = 'insert into boss(username, nickname, password, mobile, register_time, realname, idcard, businesslicense, email) values(?, ?, ?, ?, ?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
    }

};

module.exports = object;




