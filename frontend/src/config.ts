export const BACKEND_URL = "http://localhost:8787";
export const TINYMCE_API_KEY =
  "o5ubed9gy4bi2qqb9xg76caatci8gn8uii452khr7sk76hcu";

const conf = {
  backendUrl: String(import.meta.env.VITE_BACKEND_URL),
  tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
  cloudinaryCloudName: String(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME),
  cloudinaryApiKey: String(import.meta.env.VITE_CLOUDINARY_API_KEY),
  cloudinaryApiSecret: String(import.meta.env.VITE_CLOUDINARY_API_SECRET),
};

export default conf;
