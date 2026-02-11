const express = require('express')

const app=express()



// function isOldEnough(age){
//     return age>=14
// }

function isOldEnoughMiddleW(req,res,next)
{
    const age=req.query.age
    if(age>14)
    {
        next()
    
    }else[
        res.json({msg:"you are not old enough for this ride"})  
    ]
}
app.get('/ride1',isOldEnoughMiddleW,(req,res)=>{
   
    res.json({ msg:"you have taken ride 1"})
})



app.listen(3001,()=>{console.log("server is running on http://localhost:3001")})
