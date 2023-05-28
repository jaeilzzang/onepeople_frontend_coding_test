import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form/reducer";

export const store = configureStore({
  reducer: {
    formReducer: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
