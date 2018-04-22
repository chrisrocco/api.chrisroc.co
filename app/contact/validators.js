const { check, validationResult } = require('express-validator/check')

const validateContactRequest = [
    check('email').isString(),
    check('name').isString(),
    check('message').isString(),
    (request, response, next) => {
        let errors = validationResult(request)
        if(!errors.isEmpty())
            return next({ errors: errors.mapped() })
        next()
    }
]

module.exports = {
    validateContactRequest
}
