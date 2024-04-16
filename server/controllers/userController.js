const asyncHandler = require('express-async-handler')

const authUser = asyncHandler(async(req,res)=>{
    throw new Error ('something went wrong')
    res.status(200).json({message:'auth user'})
}) 

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register User" });
  });
  
  const logoutUser = asyncHandler(async (req, res) => {
      res.status(200).json({ message: "logout User" });
    });
  
    const getUserProfile = asyncHandler(async (req, res) => {
      res.status(200).json({ message: " User profile" });
    });
  
    const updateUserProfile = asyncHandler(async (req, res) => {
      res.status(200).json({ message: "Update User profile" });
    });
  
 module.exports= { authUser,
   registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile };

