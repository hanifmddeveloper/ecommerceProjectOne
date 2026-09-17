const Cat = require('../models/categorySchema')
const {categoryCreatedEmail} = require('../utils/emailSender')

let userController = (req,res)=>{
    res.send("Hellow user from user controller")
}
// user can create Category
let createCategogyController = async (req,res)=>{
  try{
   let {name}= req.body
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }
    const categoryName = name.trim().toLowerCase()

   let existingName = await Cat.findOne({name: categoryName.toLowerCase()})
   if(existingName){
   return res.status(400).json({
        success: false,
        message: "Category already exits"
    })
   }
   let cat = new Cat({
    name: categoryName
   })
   await cat.save()
    // Logged-in user's email
    const email = req.user.email;

    // Send email
    await categoryCreatedEmail(email,categoryName);
   return res.status(201).json({
    success: true,
    message: "Category created and email sent successfully",
    category: cat
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
// admin can update Controller 
let updatCategoryController = async (req,res)=>{
   let {id}= req.params
   await Cat.findByIdAndUpdate({_id: id},req.body,{new: true})
   res.status(200).json({
      success: true,
      message: `user updated`,
   })
}
// admin can delete 
let deleteUserController = async (req,res)=>{
   try{
   let {id}= req.params
    if (!id) {
    return req.status(400).json({
       success: false,
       message: 'User id required'
       })
   }
   await Cat.findByIdAndDelete({_id: id})
//    if (!id) {
//      return res.status(400).json({ 
//       success: false,
//       message: 'User not found'
//     })
//   }
   return res.status(200).json({
      success: true,
      message: `user deletedted`,
   })

}catch (error) {
        return res.status(500).json({ status: false, message: 'Internel server error' })
    }
}


module.exports= {userController,createCategogyController,getAllCategoryController,updatCategoryController,deleteUserController}