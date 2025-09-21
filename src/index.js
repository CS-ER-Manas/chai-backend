import dotenv from 'dotenv'

// import mongoose from 'mongoose';
// import {DB_NAME} from "./constants"
// import express from 'express'
import connectDB from './db/dbconnect.js';

dotenv.config({
    path:"./env"
})

connectDB();


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
