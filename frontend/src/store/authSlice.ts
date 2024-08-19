import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserData {
  email: string;
  name: string;
  bio?: string;
  profilePic?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface AuthState {
  status: boolean;
  token: string | null;
  userData: UserData;
}

interface LoginPayload {
  token: string;
  userData: UserData;
}

const initialState: AuthState = {
  status: false,
  token: null,
  userData: {
    email: "",
    name: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.status = true;
      state.token = action.payload.token;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.token = null;
      state.userData = { email: "", name: "" };
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectToken = (state: RootState) => state.auth.token;
export const selectUserData = (state: RootState) => state.auth.userData;
export default authSlice.reducer;
