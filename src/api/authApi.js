import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showLoginErr } from "../features/auth/authSlice";
// export const loginRequest = createAsyncThunk(
//   "loginRequest",
//   async (params, thunkApi) => {
//     try {
//       const { user } = params;
//       const res = await axios.post(
//         "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
//         user
//       );
//     } catch (err) {
//       thunkApi(showLoginErr(err.response.data));
//     }
//   }
// );
