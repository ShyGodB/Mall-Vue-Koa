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
        const [rows, fields] = promisePool.query(sql);
        return rows;
    }

};

module.exports = object;




