const con = require('./config-db')


let a = con.execute(`SELEXT * FROM test WHERE id = "1"`)
console.log(a)