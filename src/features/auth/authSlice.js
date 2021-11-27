import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginRequest = createAsyncThunk(
  "loginRequest",
  async (params, thunkApi) => {
    const { user } = params;
    try {
      const res = await axios.post(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        user
      );
      if (res.status === 200 || res.status === 201) {
      }
    } catch (err) {
      console.log(err.response.data);
      //  dispatch(showError(err.response.data));
    }
  }
);

const initialState = {
  taiKhoan: JSON.parse(localStorage.getItem("taiKhoan")),
  loginError: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showLoginErr: (state, err) => {
      state.loginError = err;
    },
  },
  extraReducers: {
    // [loginRequest.fulfilled]: (state, action) => {
    //   state.imageList = action.payload;
    // },
  },
});

export const { showLoginErr } = authSlice.actions;

const { reducer: authReducer } = authSlice;

export default authReducer;
