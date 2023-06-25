const Customer = require('../models/customer')

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find().sort({ username: 1 })
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addNewCustomer = async (req, res) => {
    const newCustomer = new Customer(req.body)
    try {
        const customer = await newCustomer.save()
        res.status(201).json(customer)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
        // update only if the customer exist and update only the fields that are in the req.body
        if (customer) {
            customer.username = req.body.username || customer.username
            customer.email = req.body.email || customer.email
            customer.password = req.body.password || customer.password
            customer.firstName = req.body.firstName || customer.firstName
            customer.lastName = req.body.lastName || customer.lastName
            customer.phoneNumber = req.body.phoneNumber || customer.phoneNumber
            customer.location = req.body.address || customer.address
            customer.photo = req.body.photo || customer.photo

            const updatedCustomer = await customer.save()
            res.status(200).json(updatedCustomer)
        } else {
            res.status(404).json({ message: 'Customer not found' })
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getAllCustomers,
    getCustomerById,
    addNewCustomer,
    updateCustomer,
}