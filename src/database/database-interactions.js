const connect = require('./db')

async function getData(path) {
    const conn = await connect()
    const [rows] = await conn.query(path)
    return rows
}


async function getRowsFeed() {
    const conn = await connect()
    const [rows] = await conn.query(`SELECT * FROM testfeed`)
    console.log(rows)
    return rows
}

async function registerDatabase(data) {
    const conn = await connect()

    const sql = `INSERT INTO test ( name, yearold, email, whatsapp, sex, symptoms) VALUE (?,?,?,?,?,?)`
    const values = [data.name, data.yearold, data.email, data.whatsapp, data.sex, data.symptoms]

    await conn.query(sql, values)
}

async function registerDatabaseFeed(data) {
    const conn = await connect()

    const sql = `INSERT INTO testfeed ( name, about, yearold, sex, symptoms) VALUE (?, ?, ?, ?, ?)`
    const values = [data.name, data.about, data.yearold, data.sex, data.symptoms]

    await conn.query(sql, values)
}

async function deleteTest(id) {
    const conn = await connect()

    const sql = `DELETE FROM testfeed WHERE id=?`
    const value = [id]

    await conn.query(sql, value)
}


module.exports = {
    getData,
    getRowsFeed,
    registerDatabase,
    registerDatabaseFeed,
    deleteTest
}


