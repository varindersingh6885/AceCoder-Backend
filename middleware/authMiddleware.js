import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
//middleware to protect the routes form unauthorized users

const protect=asyncHandler( async (req,res,next)=>{
    let  token=req.headers.authorization;
    console.log(token)
    if(token&&token.startsWith('Bearer'))
    {
          token=token.split(' ')[1];
          try {
              //verify will return object containing id  iat field and also expiration field
              const {id}=await jwt.verify(token,process.env.JWT_SECRET)
              const user= await  User.findById(id).populate('-password')
              req.user=user
              next()
          } catch (error) {
              console.error(error);
              res.status(401)
              throw new Error("token invalid, authorization failed")
          }
    }
    if(!token)
    {
        res.status(401)
        throw new Error("no token, authentication failed")
    }
}

)
export {protect}