const mysql = require('mysql2/promise')

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') 
        return global.connection

    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'coronac'
    // })   

    const connection = await mysql.createConnection({
        host: 'remotemysql.com',
        user: 'ShqdGdGF8B',
        password: '4CUdId3Gay',
        database: 'ShqdGdGF8B'
    })   
    
    console.log('ready!')
    global.connection = connection

    return connection
}

connect()

module.exports = connect