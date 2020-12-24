const express = require('express')
const app = express()


app 

.get('/', (req, resp) => {
    return resp.send('<h1> Ola </h1>') 
})

.listen(process.env.PORT || 3000, console.log('ola'))