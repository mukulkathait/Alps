import { BlogAction } from "../components/Blog/BlogAction.tsx";
import {
  AuthorInfo,
  FooterAuthorInfo,
} from "../components/Blog/FooterAuthorInfo.tsx";
import { Appbar } from "../components/Homepage/Appbar.tsx";
import Footer from "../components/Landing/Footer.tsx";
import { content1 } from "../temp/content.ts";

export const Blog = ({
  title = "This Is What Indian Election Look Likes Up Close. And Ofcoures, The Quick Brown Fox Jumps Over The Lazy Dog.",
  content,
}: any) => {
  return (
    <div>
      <Appbar />
      <div className="w-1/2 mx-auto">
        <div className="text-left font-bold text-4xl my-4">{title}</div>
        <AuthorInfo
          username="Maximo Barbazos"
          userImage="Image"
          publishedOn="Feb 10, 2023"
          className="my-12"
        />
        <BlogAction likeCount={234} commentCount={67} className="my-12" />
        <div>{content1}</div>
        <BlogAction likeCount={234} commentCount={67} className="my-12" />
        <FooterAuthorInfo
          userBio="Quick Brown Fox jumps over the lazy dog."
          username="Maximo Barbazos"
          userImage={""}
          className="my-12"
        />
      </div>
      <Footer className="h-16 border-t-2 border-black" />
    </div>
  );
};
