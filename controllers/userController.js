const Cat = require('../models/categorySchema')

let userController = (req,res)=>{
    res.send("Hellow user from user controller")
}
// user can create Category
let createCategogyController = async (req,res)=>{
  try{
   let {name}= req.body
   let existingName = await Cat.findOne({name: name.toLowerCase()})
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
  } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
}
// user can see all category
let getAllCategoryController = async(req,res)=>{
  try{
  let category = await Cat.find({})
  res.status(200).json({
    success: true,
    message: "All Category ",
    data: category
  })
}catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};


module.exports= {userController,createCategogyController,getAllCategoryController}