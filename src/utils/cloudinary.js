import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
 
});


const CloudinaryFileUpload=async(localFilePath)=>{
  try {
    if(!localFilePath)return null;
   const response=await cloudinary.v2.uploader
.upload(localFilePath, {
  resource_type: "auto"

});
//file has been successfully uploaded
console.log(`file is uploaded on the cloudinary ${response.url}`)
  return response
  } catch (error) {
    fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation got failed
    return null;
  }

}
export {CloudinaryFileUpload}