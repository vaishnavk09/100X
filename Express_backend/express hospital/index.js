const express = require('express');


const app=express();

app.use(express.json());

const users=[{name:'vaishnav',
          kidneys: [{
            healthy:false
          },{
            healthy:true
        }],
    

    },{name:'john',
            kidneys: [{
                healthy:true
                },{healthy:true}],
    }];
      


app.get('/',(req,res)=>{
   //return user with kidney status

   const userKidneys=users[0].kidneys;
   const numOfKidneys=userKidneys.length;
   let noOfHealthyKidneys=0;
    userKidneys.forEach(kidney=>{
        if(kidney.healthy){
            noOfHealthyKidneys++;
        }
    });

    const noOfUnhealthyKidneys=numOfKidneys-noOfHealthyKidneys;

   res.json([userKidneys,noOfHealthyKidneys,noOfUnhealthyKidneys]);
});

app.post('/',(req,res)=>{
    const isHHealthy=req.body.isHealthy;
    users[0].kidneys.push({healthy:isHHealthy});
    res.json("Kidney added");
});


app.delete('/',(req,res)=>{
    const newKideneys=users[0].kidneys.filter(kidney=>!kidney.healthy);
    users[0].kidneys=newKideneys;
    res.json("All unhealthy kidneys removed");
});

app.put('/',(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json("All kidneys marked as healthy");
});

app.listen(3000,()=>{console.log("server runnimg on port 3000")})

