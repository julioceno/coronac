const db = require('./database/config-db')
const databaseinteractions = require('./database/database-interactions')

module.exports = {
    // GET

    index(req, resp) {
        return resp.render('index.html')
    },

    casesCovid(req, resp) {
        return resp.render('cases-covid.html')
    },
    
    takeCare(req, resp) {
        return resp.render('take-care.html')
    },

     testCovid(req, resp) {
      
        return resp.render('test-covid.html')
    },

    diagnostic(req, resp) {
        return resp.render('diagnostic.html')
    },

    feed(req, resp) {
        return resp.render('feed.html')
    },

    testDone(req, resp) {
        return resp.render('test-done.html')
    },

    // POST 
  
    saveTest(req, resp) {
        const field = req.body
        try {
            let symptoms = `${field.headache}, ${field.fever}, ${field.diarrhea}, ${field.dryCough}, ${field.breath}, ${field.tasteAndSmell}, ${field.conjunctivitis}, ${field.soreThroat}, ${field.painOrDiscomfort}, ${field.tiredness}`

              // Salvando na tabela de feed
              if (field.feed === "yes") {
                databaseinteractions.registerDatabaseFeed({
                    name: field.name,
                    about: field.about,
                    date: field.date,
                    email: field.email,
                    whatsapp: field.whatsapp,
                    sex: field.sex,
                    symptoms: symptoms
                })
              }
              
              
              databaseinteractions.registerDatabase({
                  name: field.name,
                  date: field.date,
                  email: field.email,
                  whatsapp: field.whatsapp,
                  sex: field.sex,
                  symptoms: symptoms
            })

        

           
            
           return resp.redirect('/diagnostic')
        } catch(e) {
            console.log(e)           
        }

    },  
}