/* external modules */
const { validationResult } = require('express-validator/check')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

/* internal modules */
const {handleErrors} = require('./app/core/errorHandler')
const {contactRouter} = require('./app/contact/routes')



/* |===========================| */
/* | APPLICATION BOOTSTRAPPING | */
/* |===========================| */

/* LOAD ENVIRONMENT */
dotenv.config({ path: '.env' })

/* CREATE EXPRESS APPLICATION */
const app = express()
app.set('port', 4000)

/* REGISTER MIDDLEWARE */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* SETUP ROUTES */
app.use('/contact', contactRouter)

/* HANDLE ERRORS */
app.use(handleErrors)

/* START THE SERVER */
app.listen(app.get('port'), _ => console.log('app listening on port ' + app.get('port')))
