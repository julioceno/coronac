const mysql = require('mysql2')


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'coronac'
})   

conn.connect( err => {
    if (err) throw e;
})

// const a = conn.query(`SELECT LAST_INSERT_ID() FROM test`, (err, rows) => {

//     console.log(rows)
// })

module.exports = conn