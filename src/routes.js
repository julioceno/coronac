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

    async diagnostic(req, resp) {
        const id = req.params.id
        try {
            const dataTest = await databaseinteractions.getData(`SELECT * FROM test where id = ${id}`)
            const result = dataTest[0]

            // Aqui eu faço a contagem de sim que ele marcou
            let amountSymptoms = 0
            const symptoms = (result.symptoms).split(',')
            
            symptoms.forEach((e) => {

                if (e.trim() !== 'no')
                amountSymptoms += 1
            })


            // Dependendo de quantas caixinhas ele marcou ele vai receber uma mensagem lá no formulário.
            result.amountSymptoms = amountSymptoms
            if (amountSymptoms <= 4 ) {
                result.diagnosticText = "faça uma mini quarentena em casa e se os sintomas continuarem a aparecer volte aqui novamente!"
                result.diagnosticColor = style="background-color:#28DF99"
            } else if (amountSymptoms <= 7){
                result.diagnosticText = "recomendamos que vá ao médico o mais rápido possível!"
                result.diagnosticColor = style="background-color:#fddb3a"
            } else {
                result.diagnosticText = "é 100% necessário que você vá a um médico!"
                result.diagnosticColor = style="background-color:#FF748E"

            }


            return resp.render('diagnostic.html', result)
        } catch(err) {
            console.log(err)
        }

    },

    feed(req, resp) {
        return resp.render('feed.html')
    },

    async testDone(req, resp) {
        const id = req.params.id
        try {
            const dataTestFeed = await databaseinteractions.getData(`SELECT * FROM testfeed where id = ${id}`)
            const result = dataTestFeed[0]
            console.log(result)

            // Aqui eu faço a contagem de sim que ele marcou
            let amountSymptoms = 0
            const symptoms = (result.symptoms).split(',')
            
            symptoms.forEach((e) => {

                if (e.trim() !== 'no')
                amountSymptoms += 1
            })


            // Dependendo de quantas caixinhas ele marcou ele vai receber uma mensagem lá no formulário.
            result.amountSymptoms = amountSymptoms
            if (amountSymptoms <= 4 ) {
                result.diagnosticText = "recomendamos a ela a fazer uma mini quarentena em casa."
                result.diagnosticColor = style="background-color:#28DF99"
            } else if (amountSymptoms <= 7){
                result.diagnosticText = "recomendamos que ele(a) que fosse ao médico o mais rápido possível."
                result.diagnosticColor = style="background-color:#fddb3a"
            } else {
                result.diagnosticText = "recomendamos que ele(a) que fosse o médico urgentemente."
                result.diagnosticColor = style="background-color:#FF748E"
            }



            return resp.render(`test-done.html`, result)
        } catch(err) {
            console.log(err)
        }

    },


    // POST 
  
    async saveTest(req, resp) {
        const field = req.body
        try {

            // formatando idade
            function validateAge(data) {
                const date = new Date;

                year = data[0]
                month = data[1]
                day = data[2]
                
                const currentYear = date.getFullYear()
                const currentMonth = date.getMonth() + 1
                const currentDay = date.getDate()

                let currentYearOld = currentYear - year

                if (currentMonth < month || currentMonth === month && currentDay < day) currentYearOld --

                return currentYearOld 
            }

             const formattedDate = validateAge(((field.date).split('-')))

             // Transformando os ids do formulário em string
             let symptoms = `${field.headache}, ${field.fever}, ${field.diarrhea}, ${field.dryCough}, ${field.breath}, ${field.tasteAndSmell}, ${field.conjunctivitis}, ${field.soreThroat}, ${field.painOrDiscomfort}, ${field.tiredness}`


            //   Salvando na tabela de feed
              if (field.feed === "yes") {
                databaseinteractions.registerDatabaseFeed({
                    name: field.name,
                    about: field.about ,
                    date: formattedDate || 0 ,
                    email: field.email,
                    whatsapp: field.whatsapp,
                    sex: field.sex,
                    symptoms: symptoms
                })
              }
              
              databaseinteractions.registerDatabase({
                  name: field.name,
                  date: formattedDate || 0 ,
                  email: field.email,
                  whatsapp: field.whatsapp,
                  sex: field.sex,
                  symptoms: symptoms
            })
            
            const getId = await databaseinteractions.getData(`SELECT * FROM test WHERE id=(SELECT last_insert_id());`)
            const id = getId[0].id

           return resp.redirect(`/diagnostic/${id}`)
        } catch(err) {
            console.log(err)           
        }

    },  

}