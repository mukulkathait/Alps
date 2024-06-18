import BookmarkLogo from "../../assets/Bookmark.svg";
import LikeLogo from "../../assets/like.svg";
import CommentLogo from "../../assets/comment.svg";
import ShareLogo from "../../assets/share.svg";
import OptionLogo from "../../assets/options.svg";

interface BlogAction {
  likeCount: Number;
  commentCount: Number;
  className: string;
}

export const BlogAction = ({
  likeCount,
  commentCount,
  className,
}: BlogAction) => {
  return (
    <div className={`flex flex-row justify-between border-y py-2 ${className}`}>
      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <img src={LikeLogo} className="w-[1.25em] h-[1.25em]" alt="likes" />
          {`${likeCount}`}
        </div>
        <div className="flex items-center">
          <img
            src={CommentLogo}
            className="w-[1.25em] h-[1.25em]"
            alt="comments"
          />
          {`${commentCount}`}
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <div className="text-slate-400 hover:text-black">
          <img
            src={BookmarkLogo}
            className="w-[1.25em] h-[1.25em]"
            alt="bookmark"
          />
        </div>
        <div>
          <img src={ShareLogo} className="w-[1.25em] h-[1.25em]" alt="share" />
        </div>
        <div>
          <img
            src={OptionLogo}
            className="w-[1.25em] h-[1.25em]"
            alt="option"
          />
        </div>
      </div>
    </div>
  );
};
