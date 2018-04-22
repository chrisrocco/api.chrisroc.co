

function handleErrors (error, request, response, next) {
    const errors = validationResult(request)
    if(!errors.isEmpty())
        return response.status(422).json({ errors: errors.mapped() })
    next(err)
}

module.exports = {
    handleErrors
}