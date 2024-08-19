import { useEffect, useState } from "react";
import { BlogAction } from "../components/blogComponent/BlogAction.tsx";
import {
  AuthorInfo,
  FooterAuthorInfo,
} from "../components/blogComponent/FooterAuthorInfo.tsx";
import Footer from "../components/landingComponent/Footer.tsx";
import parse from "html-react-parser";
import axios from "../api/axios.ts";
import { useParams } from "react-router-dom";

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

const Blog = () => {
  const { blogId } = useParams();
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

  useEffect(() => {
    console.log("blogInfo");
  }, [blogInfo]);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await axios.get(`/api/v1/blog/blogId/${blogId}`);
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

  return (
    <div>
      {loader ? (
        <div>Loading...</div>
      ) : (
        <div className="w-1/2 mx-auto">
          <div className="text-left font-bold text-4xl my-4">
            {blogInfo.title}
          </div>
          <AuthorInfo
            username={blogInfo.author.name}
            userImage={
              blogInfo.author.profilePic ? blogInfo.author.profilePic : ""
            }
            publishedOn={blogInfo.createdAt}
            className="my-12"
          />
          <img src={blogInfo.blogImage} alt="Cover Image" />
          <BlogAction likeCount={234} commentCount={67} className="my-12" />
          <div>{parse(blogInfo.content)}</div>
          <BlogAction likeCount={234} commentCount={67} className="my-12" />
          <FooterAuthorInfo
            userBio={blogInfo.author.bio ? blogInfo.author.bio : ""}
            username={blogInfo.author.name}
            userImage={
              blogInfo.author.profilePic ? blogInfo.author.profilePic : ""
            }
            className="my-12"
          />
        </div>
      )}
      <Footer className="h-16 border-t-2 border-black" />
    </div>
  );
};

export default Blog;
