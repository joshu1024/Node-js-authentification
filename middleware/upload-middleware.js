const multer = require("multer");
const path = require("path")


const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,"uploads/")
  },
  filename: function(req,file,cb){
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }

 
})

const checkFileFilter = (req,file,cb)=>{
  
  if(file.mimetype.startsWith("image")){
    cb(null,true);
  }
  else{
    cb(new Error("the file is not an image"))
  }
}


module.exports = multer({
  storage:storage,
  fileFilter:checkFileFilter,
  limits:{
    fileSize: 5 * 24 * 24
  }
})



// const multer = require("multer");
// const path = require("path");

// //set our multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,

//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });
// //7:26:03

// //file filter function
// const checkFileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb(new Error("Not an image! Please upload only images"));
//   }
// };

// //multer middleware
// module.exports = multer({
//   storage: storage,
//   fileFilter: checkFileFilter,
//   limits: {
//     fileSize: 5 * 1024 * 1024, //5MB file size limit
//   },
// });
