import { Method } from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isErrorActions, isLoadingActions } from "redux/fetch/reducer";

import {
  errorTextSelector,
  isErrorSelector,
  isLoadingSelector,
} from "redux/fetch/selector";
import { instance } from "utils/axios";

interface Props<P> {
  method: Method;
  url: string;
  body?: P;
}

const useFetching = <T, P = {}>() => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const isError = useSelector(isErrorSelector);
  const errorText = useSelector(errorTextSelector);

  const [data, setDate] = useState<T | null>(null);

  const fetch = async ({ method, url, body }: Props<P>) => {
    dispatch(isLoadingActions(true));

    try {
      const res = await instance({
        url,
        method,
        data: body,
      });

      if (method !== "GET") {
        dispatch(isLoadingActions(false));
        return;
      }

      setDate(res.data);
      dispatch(isLoadingActions(false));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(isErrorActions({ isError: true, errorText: error.message }));
        new Error(error.message);
      }
    }
  };

  return {
    fetch,
    data,
    isLoading,
    isError,
    errorText,
  };
};

export default useFetching;
