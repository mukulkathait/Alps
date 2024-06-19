import { useEffect, useState } from "react";
import logo from "../../assets/medium.png";
import { ProfileOptions } from "../ProfileOptions";
import { Link } from "react-router-dom";
import writeIcon from "../../assets/write.svg";
import notificationIcon from "../../assets/notification.svg";

export const Appbar = () => {
  const [profileOptions, setProfileOptions] = useState(false);

  useEffect(() => {}, [profileOptions]);

  return (
    <div className="relative flex px-4 py-2 items-center justify-between border-b border-slate-200 gap-4">
      <Link
        to={"/home"}
        className="w-16 h-8 mx-2 flex justify-center items-center"
      >
        <img src={logo} alt="Logo" />
      </Link>
      <form className="w-full px-8">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-gray-400 absolute end-2.5 bottom-2.5 bg-transparent border hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:opacity-50 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex gap-4 items-center justify-between w-60">
        <Link
          to={"/new-story"}
          className="flex items-center justify-center gap-1"
        >
          <img src={writeIcon} alt="write" className="w-7 h-7" />
          <div>Write</div>
        </Link>
        <Link to={"/home"}>
          <img src={notificationIcon} alt="notifications" className="w-7 h-7" />
        </Link>
        <div
          onClick={() => {
            setProfileOptions((prev) => !prev);
          }}
          className="cursor-pointer w-8 h-8 rounded-full bg-slate-600 text-white grid place-content-center"
        >
          U
        </div>
      </div>
      {profileOptions && (
        <div className="fixed top-20 right-5">
          <ProfileOptions />
        </div>
      )}
    </div>
  );
};
