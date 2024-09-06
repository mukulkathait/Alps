interface WhoToFollowType {
  username: string;
  userInfo: string;
  userImage: string;
}

export const WhoToFollow = ({
  username,
  userInfo,
}: // userImage,
WhoToFollowType) => {
  return (
    <div className="flex justify-between p-2 rounded-md hover:shadow-gray-500 hover:shadow-md">
      <div className="flex">
        <div className="mt-1 w-7 h-7 rounded-full text-white bg-slate-600 grid place-content-center">
          {username[0]}
        </div>
        <div className="ml-2">
          <div className="font-bold">{username}</div>
          <div className="text-sm text-gray-600">{userInfo}</div>
        </div>
      </div>
      <div className="grid place-content-center">
        <button className="w-fit h-fit border border-black rounded-3xl px-4 py-1 hover:bg-green-400">
          Follow
        </button>
      </div>
    </div>
  );
};
