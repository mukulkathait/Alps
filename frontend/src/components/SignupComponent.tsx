import { Link, useNavigate } from "react-router-dom";
import { Input } from "./Input";
import { SignupInput } from "@mukulkathait/medium-common";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "../config";

export const SignupComponent = () => {
  const navigate = useNavigate();
  const [signupInputs, setSignupInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendSignupRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        signupInputs
      );
      console.log("Response: ", response);
      if (response.data.success) {
        navigate("/home");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendSignupRequest();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-screen gap-2 flex flex-col justify-center items-center"
    >
      <div className="text-4xl font-bold">Create an account</div>
      <div className="text-lg text-gray-500">
        Already have an account?{" "}
        <Link to="/signin" className="underline">
          Login
        </Link>
      </div>
      <Input
        label="Username"
        placeholder="John Doe"
        onChange={(e) => {
          setSignupInputs({ ...signupInputs, name: e.target.value });
        }}
      />
      <Input
        label="Email"
        placeholder="johndoe@email.com"
        onChange={(e) => {
          setSignupInputs({ ...signupInputs, email: e.target.value });
        }}
      />
      <Input
        label="Password"
        placeholder=""
        type="password"
        onChange={(e) => {
          setSignupInputs({ ...signupInputs, password: e.target.value });
        }}
      />
      <button
        type="submit"
        className="w-1/2 mt-2 text-white bg-black py-2.5 rounded-lg font-semibold text-lg"
      >
        Sign up
      </button>
    </form>
  );
};
