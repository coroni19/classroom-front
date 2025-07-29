import { useEffect } from "react";
import { useQuery } from "react-query";
import type { UnknownAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector, type RootState } from "../redux/store";

const useFetchData = <T>(options: {
  queryKey: string;
  serviceAction: () => void;
  isLoaded: (data: T) => boolean;
  selector: (state: RootState) => T;
  dispatchAction: (data: T) => UnknownAction;
}) => {
  const dispatch = useAppDispatch();
  const reduxData = useAppSelector(options.selector);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [options.queryKey],
    queryFn: options.serviceAction,
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    enabled: !options.isLoaded(reduxData),
  });

  useEffect(() => {
    if (isSuccess && data && !options.isLoaded(reduxData)) {
      dispatch(options.dispatchAction(data));
    }
  }, [data, isSuccess]);

  return { data: reduxData, isLoading: isLoading };
};

export default useFetchData;
