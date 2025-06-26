import express, { urlencoded } from "express"
import mongoose from "mongoose"
import {shortUrl,getOriginalUrl} from "./Controllers/url.js"
const app=express()
app.use(express.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://abhijitmaity8018:7Eiu3eXbktp7Dfqg@cluster0.fs76xak.mongodb.net/",{
    dbName:"NodeJs_Mastery_Course"
}).then(()=>{
    console.log("MongoDB connected successfully ...!")}).catch((err)=>{console.log(err)});
    app.get("/",(req,res)=>{
        //rendering the ejs file
        res.render("index.ejs",{shortUrl:null});
    })
    //shorting the url logic
    app.post('/short',shortUrl)
    //redirecting to original url using shortCode:- dynamic routing
    app.get("/:shortCode",getOriginalUrl)
const port=3000
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})