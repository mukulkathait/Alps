import { EditProfile } from "../components/profile/EditProfile";
import { useState } from "react";

export const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="">
      <div>Hello World</div>
      <div
        className="cursor-pointer text-green-500"
        onClick={() => {
          setShowProfile((prev) => !prev);
        }}
      >
        Edit Profile
      </div>
      {showProfile && (
        <div className="absolute top-6 left-1/3 bg-lime-200">
          <EditProfile />
        </div>
      )}
    </div>
  );
};
