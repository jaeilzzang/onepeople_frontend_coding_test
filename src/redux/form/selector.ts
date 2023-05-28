import { RootState } from "redux/store";

export const selectForm = (state: RootState) => state.formReducer.selectFrom;
