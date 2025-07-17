import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import type { UnknownAction } from "@reduxjs/toolkit";

const useFetchIfNeeded = (
  isLoaded: boolean,
  queryKey: string,
  serviceAction: () => void,
  dispatchAction: (data: any) => UnknownAction
) => {
  const dispatch = useDispatch();

    const { data, isSuccess } = useQuery({
      queryKey: [queryKey],
      queryFn: serviceAction,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: isLoaded
    });

    useEffect(() => {
      if (isSuccess && data && isLoaded) {
        dispatch(dispatchAction(data));
      }
    }, [data, isSuccess]);
  

  return;
};

export default useFetchIfNeeded;

