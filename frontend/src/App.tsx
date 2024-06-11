import { Appbar } from "./components/Homepage/Appbar";
import { BlogPeak } from "./components/Homepage/BlogPeak";
import { StaffPick } from "./components/Homepage/StaffPick";
import { WhoToFollow } from "./components/Homepage/WhoToFollow";
import Footer from "./components/Landing/Footer";
import Header from "./components/Landing/Header";
import Main from "./components/Landing/Main";
// import Signup from "./components/SignupComponent";

function App() {
  return (
    <div className="h-screen flex flex-col bg-mainBody-bg">
      <Header className="h-20 border-b border-black px-36" />
      <Main className="grow px-36" />
      <Footer className="h-16 border-t-2 border-black" />
    </div>
    // <div className="flex flex-col gap-8">
    //   <BlogPeak
    //     username="Mukul Kathait"
    //     userInfo="Senior Backend Developer in Google"
    //     userImage="image"
    //     blogTitle="How Does Reading Affect Your Brain"
    //     blogContent="Let my explain the WHY part"
    //     blogImage="Image"
    //     publishedOn="May 13, 2023"
    //     likeCount={123}
    //     commentsCount={56}
    //   />
    //   <BlogPeak
    //     username="Mukul Kathait"
    //     userInfo="Senior Backend Developer in Google"
    //     userImage="image"
    //     blogTitle="How Does Reading Affect Your Brain Quick Brown Fox Jumps The Quick Brown Fox Jumps Over The Lazy Dog End"
    //     blogContent="Let my explain the WHY part quick brown fox jumps over the lazy dog. I mean the quick brown fox jumps over the lazy dog."
    //     blogImage="Image"
    //     publishedOn="May 13, 2023"
    //     likeCount={123}
    //     commentsCount={56}
    //   />
    //   <BlogPeak
    //     username="Mukul Kathait"
    //     userInfo="Senior Backend Developer in Google"
    //     userImage="image"
    //     blogTitle="How Does Reading Affect Your Brain"
    //     blogContent="Let my explain the WHY part"
    //     blogImage="Image"
    //     publishedOn="May 13, 2023"
    //     likeCount={123}
    //     commentsCount={56}
    //   />
    //   <BlogPeak
    //     username="Mukul Kathait"
    //     userInfo="Senior Backend Developer in Google"
    //     userImage="image"
    //     blogTitle="How Does Reading Affect Your Brain"
    //     blogContent="Let my explain the WHY part"
    //     blogImage="Image"
    //     publishedOn="May 13, 2023"
    //     likeCount={123}
    //     commentsCount={56}
    //   />
    //   <BlogPeak
    //     username="Mukul Kathait"
    //     userInfo="Senior Backend Developer in Google"
    //     userImage="image"
    //     blogTitle="How Does Reading Affect Your Brain"
    //     blogContent="Let my explain the WHY part"
    //     blogImage="Image"
    //     publishedOn="May 13, 2023"
    //     likeCount={123}
    //     commentsCount={56}
    //   />
    //   <BlogPeak
    //     username="Mukul Kathait"
    //     userInfo="Senior Backend Developer in Google"
    //     userImage="image"
    //     blogTitle="How Does Reading Affect Your Brain"
    //     blogContent="Let my explain the WHY part"
    //     blogImage="Image"
    //     publishedOn="May 13, 2023"
    //     likeCount={123}
    //     commentsCount={56}
    //   />
    //   <BlogPeak
    //     username="Mukul Kathait"
    //     userInfo="Senior Backend Developer in Google"
    //     userImage="image"
    //     blogTitle="How Does Reading Affect Your Brain"
    //     blogContent="Let my explain the WHY part"
    //     blogImage="Image"
    //     publishedOn="May 13, 2023"
    //     likeCount={123}
    //     commentsCount={56}
    //   />
    //   <BlogPeak
    //     username="Mukul Kathait"
    //     userInfo="Senior Backend Developer in Google"
    //     userImage="image"
    //     blogTitle="How Does Reading Affect Your Brain"
    //     blogContent="Let my explain the WHY part"
    //     blogImage="Image"
    //     publishedOn="May 13, 2023"
    //     likeCount={123}
    //     commentsCount={56}
    //   />
    // </div>
    // <div className="flex flex-col gap-2">
    //   <StaffPick
    //     username="Mukul Kathait"
    //     userInfo="Senior Backend Developer in Google"
    //     userImage="Image"
    //     blogTitle="What 10 Years at Uber, Meta & Netflix Taught Me About Data Analytics?"
    //   />
    //   <StaffPick
    //     username="Nikita Negi"
    //     userInfo="Senior Advocate at Delhi High Court"
    //     userImage="Image"
    //     blogTitle="How Big Lawyer Interpret Law to Favour Those in Power."
    //   />
    //   <StaffPick
    //     username="Amitabh Bacchan"
    //     userInfo="Insurance Agent at LIC"
    //     userImage="Image"
    //     blogTitle="What about the whataboutism of the Elite Polititians with Criminal Records?"
    //   />
    // </div>
    // <div>
    //   <WhoToFollow
    //     username="Mukul Kathait"
    //     userInfo="Senior Backend Developer at Google"
    //     userImage="Image"
    //   />
    // </div>
  );
}

export default App;
