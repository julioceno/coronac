const mysql = require('mysql2/promise')

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') 
        return global.connection

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'coronac'
    })   
    console.log('conectou')
    global.connection = connection

    return connection
}

connect()

module.exports = connect