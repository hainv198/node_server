var express = require('express');

const app = express()
// const bookRoute = require('./src/router/book.router')
const homeRoute = require('./src/router/home.router')
app.use('/', homeRoute)
// app.use('/', bookRoute)
app.listen(5000, () => {
    console.log('server port 5000');
})