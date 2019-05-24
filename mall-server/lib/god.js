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
        const sql = 'insert into god(username, nickname, password, mobile, register_time, email) values(?, ?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
    }

};

module.exports = object;




