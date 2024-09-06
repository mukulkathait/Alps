import React from "react";
// import { useNavigate } from "react-router-dom";

interface UserBlogsTypes {
  blogId: string;
  blogTitle: string;
  blogContent: string;
  blogCoverImage: string;
  publishedOn: string;
  published: boolean;
  likeCount: number;
  commentsCount: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const UserBlogs = ({
  // blogId,
  blogTitle,
  blogContent,
  blogCoverImage,
  // publishedOn,
  published,
  // likeCount,
  // commentsCount,
  onClick,
}: UserBlogsTypes) => {
  // const navigate = useNavigate();

  const extractRawData = (data: string) => {
    let rawData = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i] == "<") {
        let j = i + 1;
        while (data[j++] != ">") {}
        i = j;
      }
      rawData += data[i];
      if (rawData.length == 150) {
        return rawData;
      }
    }
  };

  return (
    <div
      className={`${
        published ? "bg-green-50" : "bg-red-50"
      } p-4 rounded-md gap-4 grid grid-cols-3`}
      onClick={onClick}
    >
      <div className="flex flex-col gap-4 col-span-2">
        <div className="text-2xl font-extrabold">
          {blogTitle.length < 100 ? blogTitle : blogTitle.slice(0, 100) + "..."}
        </div>
        <div className="text-md text-slate-600">
          {extractRawData(blogContent)}
        </div>
      </div>
      <div className="col-span-1 justify-self-end self-start rounded-sm bg-gray-600 min-w-24 w-44 min-h-16 h-28">
        {blogCoverImage ? (
          <img
            src={blogCoverImage}
            className="min-w-24 w-44 min-h-16 h-28 rounded-sm"
          />
        ) : (
          "Imajhguyge"
        )}
      </div>
    </div>
  );
};
