import { Link, useNavigate, useLocation } from "react-router-dom";
import { Input } from "../commonComponent/Input";
import { SigninInput } from "@mukulkathait/medium-common";
import React, { useState } from "react";
import axios from "../../api/axios";
import { useAppDispatch } from "../../store/stateHook";
import { login } from "../../store/authSlice";
import conf from "../../config";

export const SigninComponent = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signinInputs, setSigninInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const [warning, setWarning] = useState(false);

  async function sendSigninRequest() {
    try {
      const response = await axios.post(`/api/v1/user/signin`, signinInputs);
      console.log(response.data);
      if (response.data.success) {
        dispatch(
          login({
            token: response.data.accessToken,
            userData: response.data.userResponse,
          })
        );
        navigate(from, { replace: true });
      }
    } catch (error: any) {
      if (error.response.status === 401) {
        setWarning(true);
      } else console.log("Error: ", error);
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
      {warning && (
        <div className="bg-red-500 text-white rounded-md p-1">
          Invalid Credentials ❌❌
        </div>
      )}
      <button
        type="submit"
        className="w-1/2 mt-2 text-white bg-black py-2.5 rounded-lg font-semibold text-lg"
      >
        Login
      </button>
    </form>
  );
};
