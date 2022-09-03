const express = require('express');
const { getRandomUser, getAll, addUser, updateUser, deleteUser, bulkUpdate } = require('../controllers/user.controllers');
const userRoute = express.Router()

/** 
 * 
 * @api method                get
 * @api description           Get a random user from the .json file
 * 
 * */ 
userRoute.get('/random' , getRandomUser)


/** 
 * 
 * @api method                get
 * @api description           Get all the users from the .json file
 * 
 * @api query (limit)         Limit the number of users using query parameter(s)
 * 
 * */ 
userRoute.get('/all' , getAll)


/** 
 * 
 * @api method                post
 * @api description           Save a user in the .json file
 * 
 * @api validation            required properties must be in the body
 * 
 * */ 
userRoute.post('/save' , addUser)


/** 
 * 
 * @api method                patch
 * @api description           Update a user's information in the .json file using its id
 *  
 * @api passed data location  body
 * @api validation            given user id must be a valid user id
 * 
 * */ 
userRoute.patch('/update' , updateUser)

/** 
 * 
 * @api method                patch
 * @api description           Update multiple users' information in the .json file
 *  
 * @api passed data location  body
 * @api validation            body must be an array of objects and object must be a id property
 * 
 * */ 
userRoute.patch('/bulk-update' , bulkUpdate)

/** 
 * 
 * @api method                delete
 * @api description           Delete a user from the .json file using its id
 * 
 * @api passed data location  params
 * @api validation            given user id must be a valid user id
 * 
 * */ 
userRoute.delete('/delete/:id' , deleteUser)

module.exports = userRoute ;