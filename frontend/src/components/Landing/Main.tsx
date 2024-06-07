import React from "react";
import Button from "../Button";

function Main({ className = "" }) {
  return (
    <div className={`w-[65%] flex flex-col gap-16 justify-center ${className}`}>
      <div className="text-[120px] font-normal leading-[95px]">
        Stay curious.
      </div>
      <div className="text-[24px] leading-6 font-semibold">
        Discover stories, thinking, and expertise from writers on any topic.
      </div>
      <Button
        name="Start reading"
        type="submit"
        className="px-12 font-semibold"
      />
    </div>
  );
}

export default Main;
