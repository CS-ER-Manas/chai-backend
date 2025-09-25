import dotenv from 'dotenv'


import connectDB from './db/dbconnect.js';
import { app } from './app.js';
dotenv.config({
    path:"./env"
})

connectDB()
    .then(() => {
       app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`);
        
       })
    })
    .catch((err) => {
        console.log("MongoDB connection error !!!", err);
    });







    
// import mongoose from 'mongoose';
// import {DB_NAME} from "./constants"
// import express from 'express'
// const app=express()
// ;(async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.on("error", (err) => {
//     console.log("error: the db is not listen");
//     throw err;
// });
// app.listen(process.env.PORT,()=>{
//     console.log(`App is listening on port ${process.env.PORT}`);
    
// })
//     }
//     catch(error){
//         console.error("ERROR:",error);
//         throw err
        
//     }
// })()
