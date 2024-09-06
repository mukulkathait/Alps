import MailLogo from "../../assets/mail.svg";
// import { getModifiedDate } from "../utilities";

interface AuthorInfo {
  username: string;
  userImage: string;
  publishedOn: string;
  className: string;
}

interface FooterAuthorInfoType {
  username: string;
  userBio: string;
  userImage: string;
  className: string;
}

export const AuthorInfo = ({
  username,
  userImage,
  publishedOn,
  className,
}: AuthorInfo) => {
  console.log(userImage);
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <div className="w-10 h-10 grid place-content-center text-white rounded-full bg-slate-800">
        {userImage ? (
          <img src={userImage} alt="" className="w-full h-full rounded-full" />
        ) : (
          username[0]
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-4">
          <div className="font-semibold">{username}</div>
          <button className="text-green-600">Follow</button>
        </div>
        <div className="text-sm font-semibold text-gray-500">
          {publishedOn.split("T")[0]}
        </div>
      </div>
    </div>
  );
};

export const FooterAuthorInfo = ({
  username,
  userBio,
  userImage,
  className,
}: FooterAuthorInfoType) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="w-16 h-16 grid place-content-center text-white rounded-full bg-slate-800">
        {userImage ? (
          <img src={userImage} alt="" className="w-full h-full rounded-full" />
        ) : (
          username[0]
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">Written By {username}</div>
        <div className="flex items-center gap-4">
          <button className="w-fit bg-green-700 text-white px-4 py-1 rounded-3xl">
            Follow
          </button>
          <button>
            <div className="">
              <img
                src={MailLogo}
                className="bg-green-700 w-[2em] h-[2em] p-1 rounded-full"
                alt="mail"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-800">{userBio}</div>
    </div>
  );
};
