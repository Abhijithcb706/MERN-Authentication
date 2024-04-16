const express=require('express')
const {registerUser,authUser,logoutUser,getUserProfile,updateUserProfile} =require('../controllers/userController')
const router = express.Router();

router.post('/auth',authUser)
router.post('/',registerUser)
router.post('/auth',authUser)
router.post('/logout',logoutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile);

module.exports=router;