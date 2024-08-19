import React, { useEffect, useState } from "react";
import { EditProfileInput } from "@mukulkathait/medium-common";
import axios from "axios";
import conf from "../../config";
import { Link, useNavigate } from "react-router-dom";
import { uploadProfilePic } from "../../utilities/cloudinary";
import { useAppDispatch, useAppSelector } from "../../store/stateHook";
import { login } from "../../store/authSlice";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const client = axios.create({
  baseURL: conf.backendUrl,
});

export const EditProfile = () => {
  const axiosPrivate = useAxiosPrivate();
  const token = useAppSelector((state) => state.auth.token);
  const userData = useAppSelector((state) => state.auth.userData);
  const [updatedProfile, setUpdatedProfile] = useState<EditProfileInput>({
    name: userData.name,
    bio: userData.bio,
    profilePic: userData.profilePic,
  });
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  client.interceptors.request.use(
    (client) => {
      client.headers.Authorization = `Bearer ${token}`;
      return client;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    console.log("UserProfile: ", updatedProfile);
    console.log("userData in Redux: ", userData);
  }, [updatedProfile.profilePic]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("Reader Result : ", reader.result);
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  }, [file]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let profilePicUrl = updatedProfile.profilePic;
    if (file) {
      profilePicUrl = await uploadProfilePic(file);
    }

    const updatedProfileData = {
      ...updatedProfile,
      profilePic: profilePicUrl,
    };

    setUpdatedProfile(updatedProfileData);

    console.log(
      updatedProfileData.name === userData.name &&
        updatedProfileData.bio === userData.bio &&
        updatedProfileData.profilePic === userData.profilePic
    );

    if (
      !(
        updatedProfile.name === userData.name &&
        updatedProfile.bio === userData.bio &&
        updatedProfile.profilePic === userData.profilePic
      )
    ) {
      try {
        console.log("Request Object : ", updatedProfile);
        console.log("updatedProfileData : ", updatedProfileData);
        const response = await client.post(
          `/api/v1/user/update-profile`,
          updatedProfile
        );
        console.log("Response: ", response);
        if (response.data.success) {
          dispatch(
            login({
              token: response.data.accessToken,
              userData: response.data.userResponse,
            })
          );
          navigate("/home/profile");
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="z-10 w-[40rem] min-h-[95vh] h-fit grid place-content-center mx-auto px-8 py-4 shadow-2xl shadow-gray-900 bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 mx-auto items-center p-4"
      >
        <div className="text-2xl font-bold">Profile Information</div>
        <div>
          <div className="text-md text-gray-600 self-start font-semibold">
            Photo
          </div>
          <div className="flex gap-4 w-5/6">
            <div className="min-w-32 h-32 rounded-full bg-gray-500">
              {filePreview ? (
                <img
                  src={filePreview}
                  alt="Profile Preview"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : updatedProfile.profilePic ? (
                <img
                  src={updatedProfile.profilePic}
                  alt="Profile Preview"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                ""
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
                  setUpdatedProfile((prevProfile) => ({
                    ...prevProfile,
                    profilePic: undefined,
                  }));
                  setFile(null);
                  console.log("Inside Remove Logic : ", updatedProfile);
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
              required
              type="text"
              value={updatedProfile.name}
              className={
                updatedProfile.name.length > 50
                  ? "border border-red-500 focus:border-red-500 w-full bg-gray-200 rounded-md h-10 px-2"
                  : "active:border-green-500 w-full bg-gray-200 rounded-md h-10 px-2"
              }
              onChange={(e) => {
                setUpdatedProfile({ ...updatedProfile, name: e.target.value });
              }}
            />
            <div className="flex justify-between">
              <div className="text-sm text-red-500">
                {updatedProfile.name.length == 0
                  ? "Name field can't be empty"
                  : updatedProfile.name.length > 50
                  ? "Name may only contain a maximum of 50 characters."
                  : ""}
              </div>
              <div className="text-gray-600 self-end text-sm">
                {updatedProfile.name.length}/50
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Short Bio
            </label>
            <textarea
              id="bio"
              placeholder="Tell about yourself to the world..."
              value={updatedProfile.bio ? updatedProfile.bio : ""}
              className="w-full bg-gray-200 rounded-md min-h-24 max-h-fit p-2"
              onChange={(e) => {
                e.target.value.length == 0
                  ? setUpdatedProfile({ ...updatedProfile, bio: undefined })
                  : setUpdatedProfile({
                      ...updatedProfile,
                      bio: e.target.value,
                    });
              }}
            />
            <div className="flex justify-between">
              <div className="text-sm text-red-500">
                {updatedProfile.bio != undefined &&
                updatedProfile.bio.length > 160
                  ? "Bio may only contain a maximum of 160 characters."
                  : ""}
              </div>
              <div className="text-gray-600 self-end text-sm">
                {updatedProfile.bio != undefined
                  ? updatedProfile.bio.length
                  : 0}
                /160
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-4 justify-end">
          <Link
            to={"/home"}
            className="border-green-500 border py-2 px-4 rounded-3xl text-green-500 font-semibold"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className={
              (updatedProfile.name == userData.name &&
                updatedProfile.bio == userData.bio &&
                updatedProfile.profilePic == userData.profilePic) ||
              updatedProfile.name.length === 0 ||
              updatedProfile.name.length > 50 ||
              // file == null ||
              (updatedProfile.bio != undefined &&
                updatedProfile.bio.length > 160)
                ? "cursor-not-allowed border-green-200 border py-2 px-4 bg-green-200 rounded-3xl text-white font-semibold"
                : "border-green-500 border py-2 px-4 bg-green-500 rounded-3xl text-white font-semibold"
            }
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
