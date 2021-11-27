import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    registerRequestSuccess: (state, action) => {
      const { user } = action.payload;

      state.registerError = action.payload;
    },
  },
});

const { reducer: registerReducer } = registerSlice;

export default registerReducer;
