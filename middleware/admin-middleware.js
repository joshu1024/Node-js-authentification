const isAdminUser =async(req,res,next)=>{
  if(req.userInfo.role !== "admin"){
    return res.status(403).json({
      success:false,
      message:"Forbidden! You MUST be an admin to continue."
    })
  }
  next();
}

module.exports = isAdminUser







// const isAdminUser = (req, res, next) => {
//   if (req.userInfo.role !== "admin") {
//     return res.status(403).json({
//       success: false,
//       message: "Access denied! Admin rights required.",
//     });
//   }

//   next();
// };

// module.exports = isAdminUser;
