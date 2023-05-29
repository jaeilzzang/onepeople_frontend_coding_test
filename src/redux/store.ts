import { configureStore } from "@reduxjs/toolkit";
import fetchingReducer from "./fetch/reducer";
import formReducer from "./form/reducer";

export const store = configureStore({
  reducer: {
    formReducer: formReducer,
    fetchingReducer: fetchingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
