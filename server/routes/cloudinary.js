import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null;
  try {
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resourse_type: "auto",
    });
    //File has been uploaded successfully
    console.log("File is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (e) {
    //remove the locally saved template file as the uplead operation got failed
    fs.unlinkSync(localFilePath);
    console.log(e, "erroooooooooooooooooooooooooor");
  }
};

export { uploadOnCloudinary };
