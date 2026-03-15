import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "./features/skillAPISlice";
import messageReducer from "./features/messageSlice";

export const store = configureStore({
  reducer: {
    skills: skillReducer,
    message: messageReducer
  }
})