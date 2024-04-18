const asyncHandler = require('express-async-handler')
const user = require('../models/userModels')

const authUser = asyncHandler(async(req,res)=>{
    throw new Error ('something went wrong')
    res.status(200).json({message:'auth user'})
}) 

const registerUser = asyncHandler(async (req, res) => {
const{name,email,password}=req.body;

const userExists = await user.findOne({email})

if(userExists){
  res.status(400);
  throw new Error('user exists')
}

const newUser = await user.create({name,email,password})
console.log("newUser",newUser);

    res.status(200).json({ _id:newUser._id,
    name:newUser.name,
  email:newUser.email });
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

