
const sendContactRequest = (request, response, next) => {
    response.send({
        msg: "Done!"
    })
}

module.exports = {
    sendContactRequest
}