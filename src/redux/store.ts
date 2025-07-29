import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { classesReducer } from "./slices/class.slice";
import { studentsReducer } from "./slices/student.slice";

export const store = configureStore({
  reducer: { classesState: classesReducer, studentsState: studentsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
