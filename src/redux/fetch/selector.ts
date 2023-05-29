import { RootState } from "redux/store";

export const isLoadingSelector = (state: RootState) =>
  state.fetchingReducer.isLoading;
export const isErrorSelector = (state: RootState) =>
  state.fetchingReducer.isError;
export const errorTextSelector = (state: RootState) =>
  state.fetchingReducer.errorText;
