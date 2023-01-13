 const checkDepartment=(req,res,next)=>{
    req.department= req.params.dept;
    next();
}
module.exports=checkDepartment;