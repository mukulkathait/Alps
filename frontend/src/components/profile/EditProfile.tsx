import React, { useEffect, useState } from "react";

export const EditProfile = () => {
  const [name, setName] = useState<String>("");
  const [bio, setBio] = useState<String>("");
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>(" ");

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="z-10 w-[40rem] min-h-[95vh] h-fit grid place-content-center mx-auto px-8 py-4 shadow-2xl shadow-gray-900 bg-white">
      <div className="flex flex-col gap-8 mx-auto items-center p-4">
        <div className="text-2xl font-bold">Profile Information</div>
        <div>
          <div className="text-md text-gray-600 self-start font-semibold">
            Photo
          </div>
          <div className="flex gap-4 w-5/6">
            <div className="min-w-32 h-32 rounded-full bg-gray-500">
              {filePreview && (
                <img
                  src={filePreview}
                  alt="Profile Preview"
                  className="w-full h-full rounded-full object-cover"
                />
              )}
            </div>
            <div className="">
              <input
                id="fileInput"
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="fileInput"
                className="cursor-pointer rounded text-green-500"
              >
                Update
              </label>
              <button
                type="reset"
                className="items-start text-red-600 px-2"
                onClick={() => {
                  setFile(null);
                }}
              >
                Remove
              </button>
              <div className="mt-4  text-gray-400 font-semibold">
                Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
                side.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Name*
            </label>
            <input
              type="text"
              className={
                name.length > 50
                  ? "border border-red-500 focus:border-red-500 w-full bg-gray-200 rounded-md h-10 px-2"
                  : "active:border-green-500 w-full bg-gray-200 rounded-md h-10 px-2"
              }
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="flex justify-between">
              <div className="text-sm text-red-500">
                {name.length > 50
                  ? "Name may only contain a maximum of 50 characters."
                  : ""}
              </div>
              <div className="text-gray-600 self-end text-sm">
                {name.length}/50
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Short Bio
            </label>
            <textarea
              id="bio"
              className="w-full bg-gray-200 rounded-md min-h-24 max-h-fit p-2"
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
            <div className="flex justify-between">
              <div className="text-sm text-red-500">
                {bio.length > 160
                  ? "Bio may only contain a maximum of 160 characters."
                  : ""}
              </div>
              <div className="text-gray-600 self-end text-sm">
                {bio.length}/160
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-4 justify-end">
          <button
            type="button"
            className="border-green-500 border py-2 px-4 rounded-3xl text-green-500 font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            /* className="cursor-not-allowed border-green-500 border py-2 px-4 bg-green-500 rounded-3xl text-white font-semibold" */
            className={
              name.length > 50 ||
              name.length == 0 ||
              bio.length > 160 ||
              bio.length == 0
                ? "cursor-not-allowed border-green-200 border py-2 px-4 bg-green-200 rounded-3xl text-white font-semibold"
                : "border-green-500 border py-2 px-4 bg-green-500 rounded-3xl text-white font-semibold"
            }
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
