const mongoose = require("mongoose");

const connectToDB =async(req,res)=>{
  try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('connected to Database');
  } catch (e) {
    console.log("there was an error connecting to mongodb",e);
  }
}

module.exports = connectToDB;







// const mongoose = require("mongoose");

// const connectToDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected successfully");
//   } catch (e) {
//     console.error("MongoDB connection failed");
//     process.exit(1);
//   }
// };

// module.exports = connectToDB;
