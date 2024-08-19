import { useAppSelector } from "../../store/stateHook";

export const UserImage = ({ className = "" }) => {
  const userData = useAppSelector((state) => state.auth.userData);

  return (
    <div>
      {userData.profilePic ? (
        <img
          src={userData.profilePic}
          alt={userData.name[0]}
          className={className}
        />
      ) : (
        userData.name[0].toUpperCase()
      )}
    </div>
  );
};
