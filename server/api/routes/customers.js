const {
    getAllCustomers,
    getCustomerById,
    addNewCustomer,
    updateCustomer,
} = require('../../controllers/customers')


module.exports = (router) => {
    // GET: list of all the customers
    router.get('/customers', getAllCustomers)

    // GET: a customer by id
    router.get('/customers/:id', getCustomerById)

    // POST: a new customer
    router.post('/customers/new', addNewCustomer)

    // PUT: update a customer by id
    router.put('/customers/:id', updateCustomer)
}


    