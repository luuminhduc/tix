import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieListRequest } from "../../api/movieApi";

const initialState = {
  movieList: [],
};

const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieListRequest.fulfilled]: (state, action) => {
      state.movieList = action.payload;
    },
    [fetchMovieListRequest.rejected]: () => {
      console.log("NGU");
    },
  },
});

const { reducer: movieListReducer } = movieListSlice;
export default movieListReducer;
