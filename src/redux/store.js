import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import registerReducer from "../features/register/registerSlice";
const store = configureStore({
  reducer: {
    authReducer,
    registerReducer,
  },
});

export default store;
