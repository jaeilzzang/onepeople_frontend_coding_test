import { createSlice } from "@reduxjs/toolkit";

import { IS_SERVER_STATE } from "./type";

interface FetchingState {
  isLoading: boolean;
  isError: boolean;
  errorText: string | null;
}

const initialState: FetchingState = {
  isLoading: true,
  isError: false,
  errorText: null,
};

export const fetchingReducer = createSlice({
  name: IS_SERVER_STATE,
  initialState,
  reducers: {
    isLoadingActions: (state, actions) => {
      state.isLoading = actions.payload;
    },
    isErrorActions: (state, actions) => {
      state.isError = actions.payload.isError;
      state.errorText = actions.payload.errorText;
    },
  },
});

export const { isErrorActions, isLoadingActions } = fetchingReducer.actions;

export default fetchingReducer.reducer;
