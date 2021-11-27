import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginRequest = createAsyncThunk(
  "loginRequest",
  async (params, thunkApi) => {
    try {
      const { user } = params;
      const res = await axios.post(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        user
      );
      if (res.status === 200 || res.status === 201) {
        const data = res.data;
        thunkApi.dispatch(loginRequestSuccess(data));
      }
    } catch (err) {
      thunkApi.dispatch(showLoginErr(err.response.data));
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  loginError: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showLoginErr: (state, action) => {
      state.loginError = action.payload;
    },
    hideLoginError: (state) => {
      state.loginError = "";
    },
    loginRequestSuccess: (state, action) => {
      const user = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
      state.loginError = "";
    },
  },
});

export const { showLoginErr, hideLoginError, loginRequestSuccess } =
  authSlice.actions;

const { reducer: authReducer } = authSlice;

export default authReducer;
