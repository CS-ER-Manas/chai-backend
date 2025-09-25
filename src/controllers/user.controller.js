import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.models.js"
import {CloudinaryFileUpload} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
const registerUser= asyncHandler(async(req,res)=>{
   //get user details from frontend
   //validation -not empty
   //check if user is already exists: username,email
   //check for images,ckeck for avtar
   ///upload them to cloudinary,avtar
   //create user object-create entry in db
   //remove password and refresh token field from response
   //check for user creation
   //return res
  const {fullname,email,username,password}=req.body
  console.log("fullname:",email);

    res.send(req.body);
 if(fullname==""){
  throw new ApiError(400,"filed is required");
  
 }
 const existedUser =  User.findOne({
  $or: [{ username }, { email }]
 })
 if(existedUser){
  throw new ApiError(409,"User with this email or username is already existed!")
 }
  const avtarLocalPath=req.files?.avtar[0]?.path
  const coverLocalPath=req.files?.coverImage[0]?.path
  if(!avtarLocalPath){
    throw new ApiError(400,"Avtar file is required")
  }

  const avtar=await CloudinaryFileUpload(avtarLocalPath)
 const coverImage= await CloudinaryFileUpload(coverLocalPath)
 if(!avtar){
      throw new ApiError(400,"Avtar file is required")
 }
const user = await User.create({
  fullname,
  avtar:avtar.url,
  coverImage:coverImage?.url||"",
  email,
  password,
  username:username.toLowerCase()
 })
 const createdUser=await User.findById(user._id).select(
  "-password -refreshToken"
 )
 if(!createdUser){
  throw new ApiError(500,"Something went wrong")
 }
 return res.status(201).json(
  new ApiResponse(200,createdUser,"User registered successfully")
 )
})

export {registerUser};