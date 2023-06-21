
module.exports = (router) => {
    // GET: list of all the products
    router.get('/products', (req, res) => {
        return res.json({ message: 'GET: list of all the products' })
    })
}