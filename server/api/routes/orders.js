
module.exports = (router) => {
    // GET: list of all the orders
    router.get('/orders', (req, res) => {
        return res.json({ message: 'GET: list of all the orders' })
    })
}