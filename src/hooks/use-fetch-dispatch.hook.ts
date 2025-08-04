import { useEffect } from "react";
import { useQuery } from "react-query";
import { useAppDispatch, useAppSelector } from "../redux/store";
import type { IFetchOptions } from "../interfaces/fetch-options.interface";

const useFetchData = <T>(options: IFetchOptions<T>) => {
  const dispatch = useAppDispatch();
  const reduxData = useAppSelector(options.selector);

  const { data, isSuccess, isLoading } = useQuery({
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    queryKey: [options.queryKey],
    queryFn: options.serviceAction,
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
