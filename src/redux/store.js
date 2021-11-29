import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import registerReducer from "../features/register/registerSlice";
import movieListReducer from "../features/movieList/movieListSlice";
const store = configureStore({
  reducer: {
    authReducer,
    registerReducer,
    movieListReducer,
  },
});

export default store;
