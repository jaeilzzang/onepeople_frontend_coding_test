import { RootState } from "redux/store";

export const copyDataSelect = (state: RootState) => state.formReducer.copyData;
export const copySelect = (state: RootState) => state.formReducer.copy;
