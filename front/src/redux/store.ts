import { classesReducer } from "./slices/class.slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import type { PreloadedStateShapeFromReducersMapObject as PreloadedState } from "@reduxjs/toolkit";
import { studentsReducer } from "./slices/student.slice";

export const combinedReducers = combineReducers({
  classes: classesReducer,
  students: studentsReducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: combineReducers,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof combinedReducers>;

export const store = configureStore({
  reducer: combinedReducers,
});

export type ReduxState = ReturnType<typeof store.getState>;
