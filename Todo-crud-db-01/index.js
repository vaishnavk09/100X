const express = require("express")
const jwt = require("jsonwebtoken")
JWT_SECRET="some of us are not most of us but all of us are one of us"
const {UserModel, TodosModel} = require("./db")
const app = express()
app.use(express.json())

app.post('/signup',async (req,res)=>{
const {name, email, password} = req.body

await UserModel.create({
    name: name,email: email,password: password

})
res.json({message: "user signed up successfully"

})
})

app.post('/signin', async(req,res)=>{
const {email, password} = req.body

const response= await UserModel.findOne({
    email:email,
    password:password,


})
if(response)
{
    const token =jwt.sign({
        id:response._id.toString(),
        email:response.email
    },JWT_SECRET)
    res.json({token:token})
}
else{
    res.status(401).json({message: "invalid credentials"})
}




})

app.post('/todo',(req,res)=>{

})

app.get('/todos',(req,res)=>{

})














app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
    
})