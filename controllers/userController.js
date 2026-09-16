const Cat = require('../models/categorySchema')

let userController = (req,res)=>{
    res.send("Hellow user from user controller")
}
// user can create Category
let createCategogyController = async (req,res)=>{
   let {name}= req.body
   let existingName = await Cat.findOne({name: name})
   if(existingName){
   return res.status(400).json({
        success: false,
        message: "Category already exits"
    })
   }
   let cat = new Cat({
    name: name.toLowerCase()
   })
   await cat.save()
   return res.status(201).json({
    success: true,
    message: "Category created"
   })

}
// user can see all category
let getAllCategoryController = async(req,res)=>{
  let category = await Cat.find({})
  res.status(200).json({
    success: true,
    message: "All Category ",
    data: category
  })
}


module.exports= {userController,createCategogyController,getAllCategoryController}