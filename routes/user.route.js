const express = require('express');
const { getRandomUser, getAll, addUser } = require('../controllers/user.controllers');
const userRoute = express.Router()

userRoute.get('/random' , getRandomUser)
userRoute.get('/all' , getAll)
userRoute.post('/save' , addUser)

module.exports = userRoute ;