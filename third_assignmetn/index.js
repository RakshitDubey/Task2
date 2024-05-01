const express=require('express')

const connectDb=require('./connectDb/connectDb')
const path=require('path')
const app=express()

const userModel=require('./models/userModel')
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))



app.get('/',(req,res)=>{
    res.render("index")
})

app.post('/create',async(req,res)=>{
    const{name,email,image}=req.body
    const user=await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read')

})

app.get('/read',async(req,res)=>{
    const users=await userModel.find({})
    res.render('read',{users})
})
app.listen(5000,()=>{
    connectDb()
    console.log("Server is running");
})