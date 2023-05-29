import { createSlice } from "@reduxjs/toolkit";

import { FORM_ACTION } from "./type";
import { InputProps } from "type";

interface FormState {
  copy: boolean;
  copyData: InputProps | null;
}

const initialState: FormState = {
  copy: false,
  copyData: null,
};

export const formActionSlice = createSlice({
  name: FORM_ACTION,
  initialState,
  reducers: {
    copyActions: (state, actions) => {
      state.copy = actions.payload;
    },
    copyDataActions: (state, actions) => {
      if (state.copy) {
        state.copyData = actions.payload;
        state.copy = false;
      } else if (!state.copy && actions.payload === null) {
        state.copyData = actions.payload;
      }
    },
  },
});

export const { copyActions, copyDataActions } = formActionSlice.actions;

export default formActionSlice.reducer;
