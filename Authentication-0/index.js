const express=require("express")
const app =express()
app.use(express.json())

const users=[]
   

const TokenGenerator=()=>{
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
        token += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return token;
}
app.post('/signup',(req,res)=>{
const username=req.body.username
const password=req.body.password


})

app.post('/signin',(req,res)=>{

})







app.listen(5001,()=>{
    console.log("ikda jaa re => http://localhost:5001");
    
})