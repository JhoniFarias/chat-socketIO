const express = require('express')
const routes = require('./src/router')

const app = express()

app.use(routes)

// Servidor rondando na porta 8082
app.listen(8082, () => {
    console.log('Serving on localhost:8082')
})