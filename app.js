const express = require('express');
const userRoute = require('./routes/user.route');
const routes = express.Router()

routes.use('/user' , userRoute)

module.exports = routes ;