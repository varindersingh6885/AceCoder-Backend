import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const userSchema =mongoose.Schema({
     name:{
         type:String,
         required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{
 timestamps:true
})
userSchema.methods.matchPassword=async function(password){
    return bcrypt.compare(password,this.password)
}
userSchema.pre('save',async function(next){
  if(!this.isModified('password'))
    next();
   // console.log("before hashing",this.password);
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
    //console.log("after hashing",this.password)
})
const User=mongoose.model('User',userSchema)
export default User