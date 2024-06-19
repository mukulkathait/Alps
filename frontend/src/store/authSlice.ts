import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: false,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.token = action.payload.accessToken;
    },
    logout: (state) => {
      state.status = false;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
