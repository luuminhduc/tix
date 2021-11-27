import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import loginReducer from "../features/login/loginSlice";
const store = configureStore({
  reducer: {
    authReducer,
    loginReducer,
  },
});

export default store;
