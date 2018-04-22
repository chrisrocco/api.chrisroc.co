const { validateContactRequest } = require('./validators')

const sendContactRequest = require('./controllers').sendContactRequest

const contactRouter = require('express').Router()

contactRouter.post('/', validateContactRequest, sendContactRequest)

module.exports = { contactRouter }