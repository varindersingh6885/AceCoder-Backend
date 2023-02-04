import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../util/generateToken.js'
//for creating new user
//password hasing is done using pre middleware

const createUser=asyncHandler( async (req,res)=>{
    const {name,email,password}=req.body;
    let user=await User.findOne({email})
    if(user)
    {
        res.status(400)
        throw  Error("user already exist")
    }
    user= await User.create({
        name,
        password,
        email
    })
    if(user)
    {
        
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }
    else
    {
        res.status.apply(401)
        throw Error("invalid  credentials")
    }
}    
)

// to authenticate the user 
//login is done here

const authUser=asyncHandler(async (req,res)=>{
   // console.log(req.headers);
    const{email,password}=req.body
    const user =await User.findOne({email})

    if(user&&(await user.matchPassword(password)))
    {
        const token=generateToken(user._id);
        // console.log(token)
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token
           
        })
    }
    else if(user){
        res.status(401)
        throw new Error('Invalid Password')
    }
    else
    {
        res.status(401)
        throw new Error('Invalid User Email')
    }
})
//get the user data
const getUserProfile=asyncHandler( async(req,res)=>{
    const user=await User.findById(req.user._id)
    
    if(user)
    {
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            
           
        })
    }
    else{
        res.status(404)
        throw new Error("user not found")
    }
}

)
export {createUser,authUser,getUserProfile}