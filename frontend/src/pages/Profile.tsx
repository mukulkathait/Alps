import { EditProfile } from "../components/profileComponent/EditProfile";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/stateHook";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { UserImage } from "../components/commonComponent/UserImage";
import { UserBlogs } from "../components/profileComponent/UserBlogs";
import { getModifiedDate } from "../components/utilities";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import conf from "../config";

const client = axios.create({
  baseURL: conf.backendUrl,
});

const Profile = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const token = useAppSelector((state) => state.auth.token);
  const userData = useAppSelector((state) => state.auth.userData);
  const [userBlogs, setUserBlogs] = useState<any>([]);

  client.interceptors.request.use(
    (client) => {
      client.headers.Authorization = `Bearer ${token}`;
      return client;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const getUserBlog = async () => {
      try {
        const response = await axiosPrivate.get("/api/v1/blog/allBlogs");
        setUserBlogs(response.data.data);
        console.log("akjsodfnasoidfhi", response);
        console.log("All Blogs by user : ", response.data.data);
      } catch (error) {}
    };
    getUserBlog();
    console.log("userBlogs", userBlogs);
  }, []);

  return (
    <div className="flex flex-col gap-10 p-16">
      <div className="text-5xl font-semibold">{userData.name}</div>
      <div className="border-black border-2"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 ">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="cursor-pointer text-green-500" onClick={() => {}}>
              My Work
            </div>
            <div className="cursor-pointer">About</div>
          </div>
          <div className="flex flex-col gap-8 w-5/6">
            {userBlogs &&
              userBlogs.map((blog: any) => (
                <UserBlogs
                  key={blog.id}
                  blogId={blog.id}
                  blogTitle={blog.title}
                  blogContent={blog.content}
                  blogCoverImage={blog.blogImage}
                  publishedOn={getModifiedDate(blog.createdAt)}
                  published={blog.published}
                  likeCount={23}
                  commentsCount={50}
                  onClick={() => {
                    navigate(`/edit-story/${blog.id}`);
                  }}
                />
              ))}
          </div>
        </div>
        <div className="lg:block lg:col-span-1 border-l pl-6">
          <div className="flex flex-col gap-4">
            <div className="cursor-pointer w-48 h-48 rounded-full bg-slate-600 text-white grid place-content-center">
              <UserImage className="w-48 h-48 rounded-full" />
            </div>
            <div className="text-lg font-semibold text-gray-600">
              {userData.name}
            </div>
            <div
              className="cursor-pointer text-green-500"
              onClick={() => {
                setShowProfile((prev) => !prev);
              }}
            >
              Edit Profile
            </div>
          </div>
        </div>
      </div>
      {showProfile && (
        <div className="absolute top-6 left-1/3 bg-lime-200">
          <EditProfile />
        </div>
      )}
    </div>
  );
};

export default Profile;
