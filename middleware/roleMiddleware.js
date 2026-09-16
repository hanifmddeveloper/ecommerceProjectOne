const jwt = require('jsonwebtoken');


// admin middleware
let adminMiddleware = (req,res,next)=>{
  try {
  let authorizationToken = req.headers.authorization
  if (!authorizationToken) {
        return res.status(401).json({
            success: false,
            message: "Authorization header is missing"
        });
    }
  let token = authorizationToken.split(" ")[1]
  if (!token) { return res.status(401).json({
     success: false, 
     message: "Token is missing"
     })
  }
  var decoded = jwt.verify(token, process.env.JWT_VERIFY_SECRET);
  // console.log(decoded)
   if (decoded.role !== "admin"){
    return res.status(401).json({
      success:false,
      message: "you are not authorized"
    })
  }else{
    req.user = decoded
  next()
  }
} catch (error) { return res.status(401).json({
   success: false,
   message: "Invalid or expired token"
  })
}
 

}

// vendore middleware
let vendorMiddleware = (req,res,next)=>{
  try{
  let authorizationToken = req.headers.authorization
    if (!authorizationToken) {
   return res.status(401).json({
   success: false,
   message: "Authorization header is missing"
  })
}
  let token = authorizationToken.split(" ")[1]
  if (!token) { return res.status(401).json({
     success: false, 
     message: "Token is missing"
     })
 }
  var decoded = jwt.verify(token, process.env.JWT_VERIFY_SECRET);
  // console.log(decoded)
   if (decoded.role !== "vendor" && decoded.role !== "admin"){
    return res.status(401).json({
      success:false,
      message: "you are not authorized"
    })
  }else{
   req.user = decoded; 
  next()
  }
  }catch (error) { return res.status(401).json({ 
    success: false,
     message: "Invalid or expired token" 
    })
  }
 }
// user middleware
let userMiddleware = (req,res,next)=>{
  try{
  let authorizationToken = req.headers.authorization
  if(!authorizationToken){
     return res.status(401).json({
      success:false,
      message: "you are not logged in"
    })
  }
  let token = authorizationToken.split(" ")[1]
  if (!token) { return res.status(401).json({ 
    success: false,
    message: "Token is missing" 
  })
}
  var decoded = jwt.verify(token, process.env.JWT_VERIFY_SECRET);
  // console.log(decoded)
   if (!decoded){
    return res.status(401).json({
      success:false,
      message: "you are not logged in"
    })
  }else{
  req.user = decoded;
  next()
  }
  }catch (error) { return res.status(401).json({ 
    success: false,
     message: "Invalid or expired token"
     })
   }
  }
 



module.exports = {adminMiddleware,vendorMiddleware,userMiddleware}