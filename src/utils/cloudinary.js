import { V2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.log("Error in uploading the file");
      return null;
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resourse_type: "auto",
    });
    console.log("File has been uploaded: ", response.url);
    return response;
  } catch {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
