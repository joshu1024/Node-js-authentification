const jwt = require('jsonwebtoken');

const authMiddleware =async(req,res,next)=>{
 const authHeader = req.headers['authorization'];

 const token = authHeader && authHeader.split(" ")[1];

 if(!token){
  res.status(401).json({
    success:false,
    message:"you must login first!"
  })
 }
 try {
  const decodedTokenInfo = jwt.verify(token,process.env.JWT_SECRET_KEY);
  console.log(decodedTokenInfo);

  req.userInfo = decodedTokenInfo;
  
 next();
  
 } catch (error) {
  res.status(500).json({
    success:false,
    message:"STOP!..no token provided..you must login first"
  })
 }
}

module.exports = authMiddleware




// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   console.log(authHeader);
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Access denied. No token provided. Please login to continue",
//     });
//   }

//   //decode this token
//   try {
//     const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     console.log(decodedTokenInfo);

//     req.userInfo = decodedTokenInfo;
//     next();
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Access denied. No token provided. Please login to continue",
//     });
//   }
// };

// module.exports = authMiddleware;
