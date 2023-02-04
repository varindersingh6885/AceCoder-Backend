const notFound=(req,res,next)=>{
  //console.log("in not found")
    const error=new Error(`${req.originalUrl} not Found`);
    res.status(404);
    next(error)
}
const customErrorHandler=(err,req,res,next)=>{
    //console.log("in customerrorHandler")
    const statusCode=res.statusCode===200?500:res.statusCode
    res.status(statusCode)
    res.json({
        message:err.message,
        stack:process.env.NODE_ENV==='production'?null:err.stack
    })
}
export {notFound,customErrorHandler}