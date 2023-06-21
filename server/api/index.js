const express = require('express');

const router = express.Router()

require('./routes/customers')(router)
require('./routes/orders')(router)
require('./routes/products')(router)

module.exports = router

