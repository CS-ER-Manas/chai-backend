import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
     Credential:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
 
app.get("/", (req, res) => {
  res.send("one ✅ Server is running at / with CSP enabled!");
});

// app.get("/",registerUser);


//routes import
import router from "../src/routes/user.routes.js"
import { registerUser } from "./controllers/user.controller.js"
// app.use("/")
app.use("/api/v1/users",router)

export {app} 