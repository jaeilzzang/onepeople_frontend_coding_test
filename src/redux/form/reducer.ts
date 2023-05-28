import { createSlice } from "@reduxjs/toolkit";

import { FORM_ACTION } from "./type";
import { SelectFormType } from "type/type";

interface FormState {
  addForm: boolean;
  selectFrom: SelectFormType;
}

const initialState: FormState = {
  addForm: false,
  selectFrom: "short",
};

export const formActionSlice = createSlice({
  name: FORM_ACTION,
  initialState,
  reducers: {
    addForm: (state, actions) => {
      state.addForm = actions.payload;
    },
    selectForm: (state, action) => {
      state.selectFrom = action.payload;
    },
  },
});

export const { addForm, selectForm } = formActionSlice.actions;

export default formActionSlice.reducer;
