import { useEffect } from "react";
import { useQuery } from "react-query";
import type { RootState } from "../redux/store";
import type { UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const useFetchData = <T>(options: {
  queryKey: string;
  serviceAction: () => void;
  isLoaded: (data: T) => boolean;
  selector: (state: RootState) => T;
  dispatchAction: (data: T) => UnknownAction;
}) => {
  const dispatch = useDispatch();
  const reduxData = useSelector(options.selector);

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
