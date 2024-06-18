import { Appbar } from "../components/Homepage/Appbar";
import { BlogPeak } from "../components/Homepage/BlogPeak";
import { StaffPick } from "../components/Homepage/StaffPick";
import { WhoToFollow } from "../components/Homepage/WhoToFollow";
import Footer from "../components/Footer";
import Bookmark from "../assets/Bookmark.svg";

export const Homepage = () => {
  return (
    <div>
      <div className="flex mx-36 gap-16">
        <div className="w-2/3 flex flex-col gap-8">
          <BlogPeak
            username="Mukul Kathait"
            userInfo="Senior Backend Developer in Google"
            userImage="image"
            blogTitle="How Does Reading Affect Your Brain"
            blogContent="Let my explain the WHY part"
            blogImage="Image"
            publishedOn="May 13, 2023"
            likeCount={123}
            commentsCount={56}
          />
          <BlogPeak
            username="Mukul Kathait"
            userInfo="Senior Backend Developer in Google"
            userImage="image"
            blogTitle="How Does Reading Affect Your Brain Quick Brown Fox Jumps The Quick Brown Fox Jumps Over The Lazy Dog End"
            blogContent="Let my explain the WHY part quick brown fox jumps over the lazy dog. I mean the quick brown fox jumps over the lazy dog."
            blogImage="Image"
            publishedOn="May 13, 2023"
            likeCount={123}
            commentsCount={56}
          />
          <BlogPeak
            username="Mukul Kathait"
            userInfo="Senior Backend Developer in Google"
            userImage="image"
            blogTitle="How Does Reading Affect Your Brain"
            blogContent="Let my explain the WHY part"
            blogImage="Image"
            publishedOn="May 13, 2023"
            likeCount={123}
            commentsCount={56}
          />
          <BlogPeak
            username="Mukul Kathait"
            userInfo="Senior Backend Developer in Google"
            userImage="image"
            blogTitle="How Does Reading Affect Your Brain"
            blogContent="Let my explain the WHY part"
            blogImage="Image"
            publishedOn="May 13, 2023"
            likeCount={123}
            commentsCount={56}
          />
          <BlogPeak
            username="Mukul Kathait"
            userInfo="Senior Backend Developer in Google"
            userImage="image"
            blogTitle="How Does Reading Affect Your Brain"
            blogContent="Let my explain the WHY part"
            blogImage="Image"
            publishedOn="May 13, 2023"
            likeCount={123}
            commentsCount={56}
          />
          <BlogPeak
            username="Mukul Kathait"
            userInfo="Senior Backend Developer in Google"
            userImage="image"
            blogTitle="How Does Reading Affect Your Brain"
            blogContent="Let my explain the WHY part"
            blogImage="Image"
            publishedOn="May 13, 2023"
            likeCount={123}
            commentsCount={56}
          />
          <BlogPeak
            username="Mukul Kathait"
            userInfo="Senior Backend Developer in Google"
            userImage="image"
            blogTitle="How Does Reading Affect Your Brain"
            blogContent="Let my explain the WHY part"
            blogImage="Image"
            publishedOn="May 13, 2023"
            likeCount={123}
            commentsCount={56}
          />
          <BlogPeak
            username="Mukul Kathait"
            userInfo="Senior Backend Developer in Google"
            userImage="image"
            blogTitle="How Does Reading Affect Your Brain"
            blogContent="Let my explain the WHY part"
            blogImage="Image"
            publishedOn="May 13, 2023"
            likeCount={123}
            commentsCount={56}
          />
        </div>
        <div className="w-1/3 border-l pl-6">
          <div className="flex flex-col gap-2">
            <div className="text-gray-700 font-semibold mt-6 mb-2">
              Staff Picks
            </div>
            <StaffPick
              username="Mukul Kathait"
              userInfo="Senior Backend Developer in Google"
              userImage="Image"
              blogTitle="What 10 Years at Uber, Meta & Netflix Taught Me About Data Analytics?"
            />
            <StaffPick
              username="Nikita Negi"
              userInfo="Senior Advocate at Delhi High Court"
              userImage="Image"
              blogTitle="How Big Lawyer Interpret Law to Favour Those in Power."
            />
            <StaffPick
              username="Amitabh Bacchan"
              userInfo="Insurance Agent at LIC"
              userImage="Image"
              blogTitle="What about the whataboutism of the Elite Polititians with Criminal Records?"
            />
          </div>
          <div>
            <div className="text-gray-700 font-semibold mt-6 mb-2">
              Who To Follow
            </div>
            <WhoToFollow
              username="Mukul Kathait"
              userInfo="Senior Backend Developer at Google"
              userImage="Image"
            />
            <WhoToFollow
              username="Nikita Negi"
              userInfo="Senior Advocate at High Court"
              userImage="Image"
            />
            <WhoToFollow
              username="Amitabh Bacchan"
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
