let User = require('../models/userSchema')

// admin can see all user
let allUserController = async (req,res)=>{
 let users = await User.find({}).select('-password')
 res.status(200).json({
    success: true,
    message: `${users.length} user found`,
    data: users
 })
}
// admin can see one user
let singalUserController = async (req,res)=>{
   let {id}= req.params
   let data = await User.findById({_id: id}).select('-password')
   res.status(200).json({
      success: true,
      message: `user infor`,
      data: data
   })
}
// admin can see active user
let activeUserController = async (req,res)=>{
   let data = await User.find({status:'active'})
   res.status(200).json({
      success: true,
      message: `Active user infor`,
      data: data
   })
}
// admin can see deactive usre
let deactiveUserController = async (req,res)=>{
   let data = await User.find({status:'deactive'})
   res.status(200).json({
      success: true,
      message: `Active user infor`,
      data: data
   })
}
// update Controller by admin
// let updateUserController = async (req,res)=>{
//    let {id}= req.params
//    await User.findByIdAndUpdate({_id: id},req.body,{new: true})
//    res.status(200).json({
//       success: true,
//       message: `user updated`,
//    })
// }
// user and admin can update profile
let updateUserController = async (req,res)=>{
   try{
   let userId;
   // admin can update
   if(req.user.role === "admin"){
      userId = req.params.id
   }else{
   // user cann  
      userId = req.user.id
   }
   let updatedUser =await User.findByIdAndUpdate(userId, req.body,{new: true})
   
// check user
if (!updatedUser) { 
   return res.status(404).json({
       success: false, 
       message: "User not found"
      })
    }
   res.status(200).json({
      success: true,
      message: `user updated`,
   })

   } catch (error) { 
      res.status(500).json({ 
         success: false, 
         message: "Failed to update user", error: error.message 
      });
   }
}

module.exports = {allUserController,singalUserController,activeUserController,deactiveUserController,updateUserController}