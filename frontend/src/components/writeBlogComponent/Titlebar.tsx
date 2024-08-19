import { useState } from "react";
import logo from "../../assets/medium.png";
import { ProfileOptions } from "../commonComponent/ProfileOptions";
import NotificationLogo from "../../assets/notification.svg";
import { UserImage } from "../commonComponent/UserImage";

export const Titlebar = () => {
  const [profileOptions, setProfileOptions] = useState(false);

  return (
    <div className="relative flex px-28 py-4 items-center justify-between border-b border-slate-200">
      <div className="w-16 h-8 mx-2 flex justify-center items-center">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex gap-4 items-center">
        {/* <button className="bg-green-500 px-4 py-1 text-white font-normal rounded-3xl">
          Publish
        </button> */}
        <img
          src={NotificationLogo}
          className="w-7 h-7 cursor-pointer"
          alt="likes"
        />
        <div
          className="cursor-pointer w-7 h-7 rounded-full bg-gray-600 grid place-content-center"
          onClick={() => {
            setProfileOptions((prev) => !prev);
          }}
        >
          <UserImage className="w-7 h-7 rounded-full" />
        </div>
        {profileOptions && (
          <div className="fixed top-12 right-20">
            <ProfileOptions />
          </div>
        )}
      </div>
    </div>
  );
};
