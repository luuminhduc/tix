import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequestSuccess } from "../auth/authSlice";
import axios from "axios";

export const registerRequest = createAsyncThunk(
  "registerRequest",
  async (params, thunkApi) => {
    const { user, history } = params;
    try {
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        data: user,
      });
      if (res.status === 200 || res.status === 201) {
        const data = res.data;
        console.log(data);
        thunkApi.dispatch(loginRequestSuccess({ user: data, history }));
      }
    } catch (err) {
      thunkApi.dispatch(registerRequestFail(err.response.data));
    }
  }
);

const initialState = {
  registerError: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerRequestFail: (state, action) => {
      state.registerError = action.payload;
    },
    hideRegisterError: (state) => {
      state.registerError = "";
    },
  },
});

export const { registerRequestFail, hideRegisterError } = registerSlice.actions;

const { reducer: registerReducer } = registerSlice;

export default registerReducer;
