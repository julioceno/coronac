const express = require('express')
const app = express()


app 

.get('/', (req, resp) => {
    return resp.send('<h1> Coronac </h1> <p> Ola Visitante, se voce está vendo isso nesse momento é porque o servidor ainda não configurado. Mas não se desanime, já estou ajustando esse erro </p>') 
})

.listen(process.env.PORT || 3000, console.log('ola'))