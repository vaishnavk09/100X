const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { auth, JWT_SECRET } = require("./auth");
const { UserModel, TodosModel } = require("./db");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

app.post('/signup',async (req,res)=>{
    try{

        const requiredBody= z.object(
            {
                email:  z.string().email(),
                name: z.string().min(3).max(100),
                password:z.string().min(8).max(30).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
                

            }
        )
        const pasreSuccess= requiredBody.safeParse(req.body)
        if(!pasreSuccess.success)
        {
            return res.status(400).json({
                message:"Invalid request body",
                errors: pasreSuccess.error.errors
            })
        }
const name = req.body.name
const email = req.body.email
const password = req.body.password

const existingUser = await UserModel.findOne({ email });
if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
}

const hashedPassword= await(bcrypt.hash(password,10))

await UserModel.create({
    name: name,
    email: email,
    password: hashedPassword

})
res.json({message: "user signed up successfully"

})
    }catch(err)
    {
        res.status(500).json({message: "internal server error"})
    }
})

app.post('/signin', async(req,res)=>{
    
const {email, password} = req.body

const response= await UserModel.findOne({
    email:email,
})

if (!response) {
    return res.status(401).json({ message: "invalid credentials" });
}

const passwordMatch= await bcrypt.compare(password,response.password)

if(response && passwordMatch)
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

app.post('/todo',auth,async(req,res)=>{
const userId = req.userId
const title = req.body.title
const done = req.body.done

await TodosModel.create({
    userId:userId,
    title:title,
    done:done
})
res.json({message: "todo created successfully"})
})

app.get('/todos',auth, async(req,res)=>{
 const userId = req.userId
  const todos = await TodosModel.find({
    userId:userId
  })
  res.json({todos:todos})
})

app.put('/todo/:id', auth, async (req, res) => {
    const userId = req.userId;
    const todoId = req.params.id;
    const { title, done } = req.body;

    const updatedTodo = await TodosModel.findOneAndUpdate(
        { _id: todoId, userId: userId },
        { title, done },
        { new: true }
    );

    if (!updatedTodo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: "todo updated successfully", todo: updatedTodo });
});

app.delete('/todo/:id', auth, async (req, res) => {
    const userId = req.userId;
    const todoId = req.params.id;

    const deletedTodo = await TodosModel.findOneAndDelete({
        _id: todoId,
        userId: userId
    });

    if (!deletedTodo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: "todo deleted successfully" });
});





app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
    
})