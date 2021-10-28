var express=require('express')
 
var router=express.Router();
 
router.get('/',(req,res)=>{
    let random_num=Math.floor(Math.random()*100)+1;
    let data=req.query.x;
    console.log(data,random_num);
    res.send('Math.cos('+random_num+') is: '+Math.cos(random_num)+'         Math.asin('+random_num+') is: '+Math.asin(random_num)+'         Math.asinh('+random_num+') is: '+Math.asinh(random_num)
    );
})
 
module.exports=router