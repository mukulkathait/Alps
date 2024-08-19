interface StaffPickType {
  username: string;
  userInfo: string;
  userImage: string;
  blogTitle: string;
}

export const StaffPick = ({
  username,
  userInfo,
  userImage,
  blogTitle,
}: StaffPickType) => {
  return (
    <div className="flex flex-col p-2 rounded-md hover:border-green-400 hover:shadow-sm hover:shadow-gray-500">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full text-white bg-slate-600 grid place-content-center">
          {username[0]}
        </div>
        <div className="text-slate-700 text-xs">
          <b>
            {username}, {userInfo}
          </b>
        </div>
      </div>
      <div className="font-bold text-base">{blogTitle}</div>
    </div>
  );
};
