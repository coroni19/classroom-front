import type { RootState } from "../redux/store";
import type { UnknownAction } from "@reduxjs/toolkit";

export interface IFetchOptions<T> {
  queryKey: string;
  serviceAction: () => void;
  isLoaded: (data: T) => boolean;
  selector: (state: RootState) => T;
  dispatchAction: (data: T) => UnknownAction;
}