import { Link } from "react-router-dom";

function Main({ className = "" }) {
  return (
    <div className={`w-[65%] flex flex-col gap-16 justify-center ${className}`}>
      <div className="text-[120px] font-normal leading-[95px]">
        Stay curious.
      </div>
      <div className="text-[24px] leading-6 font-semibold">
        Discover stories, thinking, and expertise from writers on any topic.
      </div>
      <Link
        to="/signup"
        className="bg-black text-white px-12 font-semibold text-nowrap py-2.5 w-full text-center border border-black rounded-lg"
      >
        Start reading
      </Link>
    </div>
  );
}

export default Main;
