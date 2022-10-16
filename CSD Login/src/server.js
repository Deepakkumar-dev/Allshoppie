const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const port = 8000
const users_collection1 = require('./userdatabase/userdata')
require("./userdatabase/mongoose_connection")

const app = express()


app.use(bodyparser.urlencoded(
    {
        extended:true
    })
)

app.use(express.json())

let mainfolder = path.join(__dirname,"../")
app.use(express.static(mainfolder))


app.get('/',(req,res)=>{
    res.send('home page');
    console.log(__dirname)
    console.log(mainfolder)

})

app.get('/register',(req,res)=>{
    res.sendFile(mainfolder+"/register1.html")
})

app.get('/login',(req,res)=>{
    res.sendFile(mainfolder+"/login.html")
})


app.post("/register",(req,res)=>{
    console.log(req.body);
    let req_userdata = new users_collection1(req.body);
    req_userdata.save();
    res.send("Registered Succesfully")
})

app.post("/login",async (req,res)=>{
    let usermail = req.body.email;
    let userpassword = req.body.password;
    


    let req_userdata = await users_collection1.findOne({email:usermail});
    if(req_userdata != null && userpassword == req_userdata.password){
        res.send("Email exist AND correct password")
    }
    else{
        res.send("Email dont exist")
    }
    // res.send("logged in")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})