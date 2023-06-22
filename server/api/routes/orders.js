
module.exports = (router) => {
    // GET: list of all the orders
    router.get('/orders', (req, res) => {
        return res.json({ message: 'GET: list of all the orders' })
    })

    router.post('/orders', (req, res) => {
        return res.json({ message: 'POST: Add new order' })
    })


    router.get('/orders/custormer', (req, res) => {
        return res.json({ message: 'GET: list of all the orders by specific user' })
    })
}