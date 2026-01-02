const express=require("express")
const app =express()
app.use(express.json())
const jwt=require("jsonwebtoken")

const JWT_SECRET="vaishnav123ilovevaishnavi"
const users=[]
   


app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })
    res.send({
        message: "You have signed up"
    })
})


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({username},JWT_SECRET);
        // user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});


app.get("/me", (req, res) => {
    // const token = req.headers.authorization;
    const token = req.headers.token;
    const decodedinfo = jwt.verify(token, JWT_SECRET);
    const username= decodedinfo.username;
    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username){
            foundUser=users[i];
            break;
        }
    }

    if (foundUser) {
    
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})





app.listen(5001,()=>{
    console.log("ikda jaa re => http://localhost:5001");
    
})