import { Link } from "react-router-dom";
import { EditProfile } from "./profile/EditProfile";

export const ProfileOptions = () => {
  return (
    <div className="w-fit h-fit px-8 py-4 shadow-lg shadow-slate-400 flex flex-col gap-6 bg-gray-50 rounded-md">
      <div className="flex flex-col gap-2">
        <Link
          to="/home/profile"
          className="cursor-pointer text-slate-600 hover:text-black"
        >
          Profile
        </Link>
        <div className="cursor-pointer text-slate-600 hover:text-black">
          Reading List
        </div>
      </div>
      <div className="cursor-pointer text-slate-600 hover:text-black">
        Sign Out
      </div>
    </div>
  );
};
