import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMovieListRequest = createAsyncThunk(
  "fetchMovieListRequest",
  async (params, thunkAPI) => {
    try {
      const res = await axios.get(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09"
      );
      if (res.status === 200 || res.status === 201) {
        return res.data;
      }
    } catch (err) {
      throw Error(err);
    }
  }
);
