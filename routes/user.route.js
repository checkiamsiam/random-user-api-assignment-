const express = require('express');
const { getRandomUser, getAll, addUser, updateUser } = require('../controllers/user.controllers');
const userRoute = express.Router()

userRoute.get('/random' , getRandomUser)
userRoute.get('/all' , getAll)
userRoute.post('/save' , addUser)
userRoute.patch('/update' , updateUser)

module.exports = userRoute ;