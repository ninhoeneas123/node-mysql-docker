const validationMiddleware = (request, response, next) => {
    const name = request.body.name
    if (!name) {
        response.status(400).json({ error: "the name field cannot be empty." })
    } else {
        next();
    }
}

export default { validationMiddleware }