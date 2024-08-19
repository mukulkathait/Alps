import { BlogPeak } from "../components/homePageComponent/BlogPeak";
import { StaffPick } from "../components/homePageComponent/StaffPick";
import { WhoToFollow } from "../components/homePageComponent/WhoToFollow";
import Footer from "../components/commonComponent/Footer";
import Bookmark from "../assets/Bookmark.svg";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { getModifiedDate } from "../components/utilities";

const Homepage = () => {
  const navigate = useNavigate();
  const [homeBlogs, setHomeBlogs] = useState<any>([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get("/api/v1/blog");
        setHomeBlogs(response.data.data);
        console.log("response.data.data", response.data.data);
      } catch (error) {}
    };
    getBlogs();
    console.log("homeBlogs", homeBlogs);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-8 sm:mx-16 md:mx-28 lg:mx-32 gap-16 ">
        <div className="mt-8 lg:col-span-2 flex flex-col gap-8">
          {homeBlogs.map((blog: any) => (
            <BlogPeak
              key={blog.id}
              username={blog.author.name}
              userBio={blog.author.bio}
              userProfilePic={blog.author.profilePic}
              blogTitle={blog.title}
              blogContent={blog.content}
              blogCoverImage={blog.blogImage}
              publishedOn={getModifiedDate(blog.createdAt)}
              likeCount={23}
              commentsCount={50}
              onclick={() => {
                navigate(`/home/${blog.id}`);
              }}
            />
          ))}
        </div>
        <div className="hidden lg:block lg:col-span-1 border-l pl-6">
          <div className="flex flex-col gap-2">
            <div className="text-gray-900 font-semibold mt-6 mb-2 text-lg ">
              Staff Picks
            </div>
            <StaffPick
              username="John Doe"
              userInfo="Senior Backend Developer in Google"
              userImage="Image"
              blogTitle="What 10 Years at Uber, Meta & Netflix Taught Me About Data Analytics?"
            />
            <StaffPick
              username="Maximo Bulgaria"
              userInfo="Senior Advocate at Delhi High Court"
              userImage="Image"
              blogTitle="How Big Lawyer Interpret Law to Favour Those in Power."
            />
            <StaffPick
              username="Shaun Evans"
              userInfo="Insurance Agent at LIC"
              userImage="Image"
              blogTitle="What about the whataboutism of the Elite Polititians with Criminal Records?"
            />
          </div>
          <div>
            <div className="text-gray-900 font-semibold mt-6 mb-2 text-lg">
              Who To Follow
            </div>
            <WhoToFollow
              username="John Doe"
              userInfo="Senior Backend Developer at Google"
              userImage="Image"
            />
            <WhoToFollow
              username="Maximo Bulgaria"
              userInfo="Senior Advocate at High Court"
              userImage="Image"
            />
            <WhoToFollow
              username="Shaun Evans"
              userInfo="Insurance Agent at LIC"
              userImage="Image"
            />
          </div>
          <div>
            <div className="text-gray-700 font-semibold mt-6 mb-2">
              Reading List
            </div>
            <div className="text-gray-600">
              Click the{" "}
              <img
                src={Bookmark}
                className="inline h-[1em] w-[1em]"
                alt="bookmark"
              />{" "}
              on any story to easily add it to your reading list or a custom
              list that you can share.
            </div>
          </div>
          <Footer className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
