import { Link, useNavigate } from "react-router-dom";
import { Input } from "./Input";
import { SigninInput } from "@mukulkathait/medium-common";
import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const SigninComponent = () => {
  const navigate = useNavigate();
  const [signinInputs, setSigninInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });

  async function sendSigninRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        signinInputs
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
    sendSigninRequest();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-screen gap-2 flex flex-col justify-center items-center"
    >
      <div className="text-4xl font-bold">Welcome Back.</div>
      <div className="text-lg text-gray-500">
        Don't have an account yet?{" "}
        <Link to="/signup" className="underline">
          Signup
        </Link>
      </div>
      <Input
        label="Email"
        placeholder="johndoe@email.com"
        onChange={(e) => {
          setSigninInputs({ ...signinInputs, email: e.target.value });
        }}
      />
      <Input
        label="Password"
        placeholder=""
        type="password"
        onChange={(e) => {
          setSigninInputs({ ...signinInputs, password: e.target.value });
        }}
      />
      <button
        type="submit"
        className="w-1/2 mt-2 text-white bg-black py-2.5 rounded-lg font-semibold text-lg"
      >
        Login
      </button>
    </form>
  );
};
