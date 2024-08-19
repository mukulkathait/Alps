import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import conf, { TINYMCE_API_KEY } from "../config";
import { useEffect, useRef, useState } from "react";
import { Titlebar } from "../components/writeBlogComponent/Titlebar";
import { CreateBlogInput, UpdateBlogInput } from "@mukulkathait/medium-common";
import axios from "axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAppSelector } from "../store/stateHook";
import { Link, useNavigate, useParams } from "react-router-dom";
import { uploadBlogCoverImage } from "../utilities/cloudinary";

interface BlogInfoType {
  id: string;
  title: string;
  content: string;
  blogImage: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    name: string;
    bio: string;
    profilePic: string;
  };
}

const EditBlog = () => {
  const { blogId } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [blogInfo, setBlogInfo] = useState<BlogInfoType>({
    id: "",
    title: "",
    content: "",
    blogImage: "",
    createdAt: "",
    updatedAt: "",
    author: {
      id: "",
      name: "",
      bio: "",
      profilePic: "",
    },
  });
  const [loader, setLoader] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await axiosPrivate.get(
          `/api/v1/blog/blogId/${blogId}`
        );
        console.log("Response: ", response);
        if (response.data.success) {
          setBlogInfo(response.data.data);
          setLoader(false);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getBlog();
  }, []);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  }, [file]);

  const saveBlog = async (publish: boolean) => {
    let coverImageUrl = blogInfo.blogImage;
    if (file) {
      coverImageUrl = await uploadBlogCoverImage(file);
    }

    const updatedBlogInputs = {
      ...blogInfo,
      published: publish,
      blogImage: coverImageUrl,
    };

    setBlogInfo(updatedBlogInputs);

    const updateBlogInfo = {
      id: blogInfo.id,
      published: publish,
    };

    try {
      console.log("UpdatedBlogInputs : ", updateBlogInfo);
      const response = await axiosPrivate.put(`/api/v1/blog`, updateBlogInfo);
      if (response.data.success) {
        navigate("/home");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const editorRef = useRef<TinyMCEEditor | null>(null);

  return (
    <>
      <Titlebar />
      <div className="w-2/3 mx-auto py-4 flex flex-col items-center gap-4">
        <div className="w-full flex flex-row gap-4 justify-end">
          <Link
            to={"/home"}
            className="py-2 px-4 bg-red-500 text-white hover:bg-red-400 font-semibold rounded-md items-end"
          >
            Cancel
          </Link>
          <button
            className="py-2 px-4 bg-orange-400 text-white font-semibold hover:bg-orange-500 rounded-md items-end"
            onClick={() => {
              saveBlog(false);
            }}
          >
            Save as Draft
          </button>
          <button
            className="py-2 px-4 bg-green-400 text-white font-semibold hover:bg-green-500 rounded-md items-end"
            onClick={() => {
              saveBlog(true);
            }}
          >
            Publish
          </button>
        </div>
        <input
          type="text"
          className="w-full rounded-md h-12 px-4 text-2xl font-medium shadow-md shadow-slate-300"
          placeholder="Title"
          value={blogInfo.title}
          onChange={(e) =>
            setBlogInfo((prevData) => ({
              ...prevData,
              title: e.target.value,
            }))
          }
        />
        <div className="flex gap-4 w-full justify-between rounded-md shadow-md shadow-slate-300">
          <div className="ml-4 flex flex-col justify-center gap-4">
            <div className="text-2xl font-medium text-slate-400">
              Cover Image
            </div>
            <div className="flex gap-4">
              <input
                id="fileInput"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="fileInput"
                className="cursor-pointer rounded text-green-500 border py-1 px-4 text-lg font-normal border-green-500"
              >
                Insert
              </label>
              <button
                type="reset"
                className="items-start text-red-600 rounded border py-1 px-4 text-lg font-normal border-red-600"
                onClick={() => {
                  setFile(null);
                }}
              >
                Remove
              </button>
            </div>
            <div className="text-gray-400 font-normal">
              Recommended: Rectangle JPG, JPEG, or PNG.
            </div>
          </div>
          <div className="w-44 h-32 rounded-md bg-gradient-to-r from-cyan-300 to-fuchsia-300">
            {filePreview ? (
              <img
                src={filePreview}
                alt="Profile Preview"
                className="w-44 h-32 rounded-md object-cover"
              />
            ) : blogInfo.blogImage ? (
              <img
                src={blogInfo.blogImage}
                alt="Profile Preview"
                className="w-44 h-32 rounded-md object-cover"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <Editor
          apiKey={TINYMCE_API_KEY}
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue={blogInfo.content}
          onEditorChange={(a) =>
            setBlogInfo((prevData) => ({ ...prevData, content: a }))
          }
          init={{
            width: 995,
            min_height: 550,
            resize: false,
            menubar: false,
            autoresize_bottom_margin: 0,
            plugins: [
              "advlist",
              "autolink",
              "autoresize",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
    </>
  );
};

export default EditBlog;
