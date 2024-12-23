// mysql 모듈 소환
const mariadb = require('mysql2');
require('dotenv').config();

console.log('Current directory:', process.cwd());
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// DB와 연결 통로 생성
const connection = mariadb.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : process.env.DB_PASSWORD,
    database : 'BookShop',
    dateStrings : true
});

module.exports = connection;