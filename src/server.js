const express = require('express')
const app = express()
const methodOverride = require('method-override')
const cors = require('cors')

// Configurando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: app,
    noCache: true
})

// Configurando rotas
const routes = require('./routes')

app 

.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.use(express.static('public'))
.use(cors())


.get('/', routes.index)
.get('/cases-covid', routes.casesCovid)
.get('/take-care', routes.takeCare)
.get('/test-covid', routes.testCovid)
.get('/diagnostic/:id', routes.diagnostic )
.get('/feed', routes.feed)
.get('/test-done/:id', routes.testDone)

.post('/save-test', routes.saveTest)

.listen(process.env.PORT || 3000)