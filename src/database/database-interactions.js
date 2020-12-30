const db = require('./config-db')

function registerDatabase(data) {
    return db.query(`
        INSERT INTO test (
            name,
            date,
            email,
            whatsapp,
            sex,
            symptoms
        ) VALUES (
            "${data.name}",
            "${data.date}",
            "${data.email}",
            "${data.whatsapp}",
            "${data.sex}",
            "${data.symptoms}"
        );
    `)
    
}

function registerDatabaseFeed(data) {
        return db.query(`
            INSERT INTO testfeed (
                name,
                about,
                date,
                email,
                whatsapp,
                sex,
                symptoms
            ) VALUES (
                "${data.name}",
                "${data.about}",
                "${data.date}",
                "${data.email}",
                "${data.whatsapp}",
                "${data.sex}",
                "${data.symptoms}"
            );
    `   )

}

module.exports = {
    registerDatabase,
    registerDatabaseFeed
}

// SELECT LAST_INSERT_ID();

