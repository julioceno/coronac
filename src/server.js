const express = require('express')
const app = express()
const methodOverride = require('method-override')

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


.get('/', routes.index)
.get('/cases-covid', routes.casesCovid)
.get('/take-care', routes.takeCare)
.get('/test-covid', routes.testCovid)
.get('/diagnostic', routes.diagnostic )
.get('/feed', routes.feed)
.get('/test-done', routes.testDone)


.listen(process.env.PORT || 3000)