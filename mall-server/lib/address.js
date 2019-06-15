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
    async listAddressByGodId(data) {
        const sql = 'select * from address where god_id = ?';
        const [rows, fields] = await promisePool.query(sql, data);
        return rows;
    },

    /* 增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增 */
    async addAddress(data) {
        const sql = 'insert into address(god_id, name, area, address, mobile) values(?, ?, ?, ?, ?)';
        await promisePool.query(sql, data);
    },

    /* 改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改 */


    // 修改头像


};

module.exports = object;
