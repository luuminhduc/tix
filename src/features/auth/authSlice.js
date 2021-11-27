import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const { user } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));

      state.user = user;
    },
  },
});

export const { getUser } = authSlice.actions;

const { reducer: authReducer } = authSlice;

export default authReducer;
