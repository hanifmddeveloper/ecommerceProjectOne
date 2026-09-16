const express = require('express')
const _ = express.Router()
const {userController,createCategogyController,getAllCategoryController} = require('../controllers/userController')



_.get('/user/product',userController)
_.post('/create/category',createCategogyController)
_.get('/all/category',getAllCategoryController)




module.exports = _