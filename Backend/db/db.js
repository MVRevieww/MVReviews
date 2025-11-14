const mysql = require('mysql2')

const pool = mysql.createPool({
    host: '172.18.4.109',
    user: 'DBjay',
    password: 'manager',
    database: 'mvreview'
})

module.exports = pool