const jwt = require('jsonwebtoken')

const generateToken = (res,userid)=>{
    const token =jwt.sign({userid},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.cookie('jwt',token,{
        httpOnly: true,
        secure:process.env.NODE_ENV !== 'developement',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 *1000
    })
}

module.exports=generateToken;