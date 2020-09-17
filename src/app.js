const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const fs = require('fs')

const user = require('../src/utils/getUser')

const app = express()
const port = process.env.PORT || 3000
//Define paths for exprewss config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('/request', (req,res) => {
    if(!req.query.firstName) {
        return res.send({
            error: 'you must add an name'
        })
    }
    
    res.send(user(req.query.firstName))
    
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})