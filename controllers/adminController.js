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
// admin can update Controller 
let updateUserController = async (req,res)=>{
   let {id}= req.params
   await User.findByIdAndUpdate({_id: id},req.body,{new: true})
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
   await User.findByIdAndDelete({_id: id})
   if (!User) {
     return res.status(400).json({ 
      success: false,
      message: 'User not found'
    })
  }
   return res.status(200).json({
      success: true,
      message: `user deletedted`,
   })

}catch (error) {
        return res.status(500).json({ status: false, message: 'Internel server error' })
    }
}
// admin can see singleUserController
let singleUserController = async (req,res)=>{
   
}




module.exports = {allUserController,singalUserController,activeUserController,deactiveUserController,updateUserController,deleteUserController}