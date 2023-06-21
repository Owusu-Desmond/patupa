
module.exports = (router) => {
    // GET: list of all the customers
    router.get('/customers', (req, res) => {
        return res.json({ message: 'GET: list of all the customers' })
    })
}

    