import Header from "../components/landingComponent/Header";
import Main from "../components/landingComponent/Main";
import Footer from "../components/landingComponent/Footer";

function Landing() {
  return (
    <div className="h-screen flex flex-col bg-mainBody-bg">
      <Header className="h-20 border-b border-black px-36" />
      <Main className="grow px-36" />
      <Footer className="h-16 border-t-2 border-black" />
    </div>
  );
}

export default Landing;
