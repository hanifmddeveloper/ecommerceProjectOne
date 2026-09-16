const express = require('express')
const _ = express.Router()
const {allUserController,singalUserController,activeUserController,deactiveUserController,updateUserController} = require('../controllers/adminController')



_.get('/all-user',allUserController)
_.get('/user/:id',singalUserController)
_.get('/active/user',activeUserController)
_.get('/deactive/user',deactiveUserController)
_.post('/update/user/:id',updateUserController)




module.exports = _