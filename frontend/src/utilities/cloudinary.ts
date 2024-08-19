// import { v2 as cloudinary } from "cloudinary";
import conf from "../config";
import axios from "axios";

async function uploadImage(
  imageFile: File,
  uploadPreset: string
): Promise<string> {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", uploadPreset); // replace with your upload preset

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${conf.cloudinaryCloudName}/image/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.secure_url;
}

export const uploadProfilePic = async (imageFile: File) => {
  const url = await uploadImage(imageFile, "medium_user_cover_pic");
  console.log(url);
  return url;
};

export const uploadBlogCoverImage = async (imageFile: File) => {
  const url = await uploadImage(imageFile, "blog_cover_image");
  return url;
};
