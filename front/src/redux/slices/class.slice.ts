import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TClass } from "../../types/class.type";

const initialState: TClass[] = [];

export const classSlice = createSlice({
  name: "classes",
  initialState: initialState,
  reducers: {
    setClasses: (state, action: PayloadAction<TClass[]>) => {
      return [
        ...state,
        ...action.payload,
      ];
    },
  },
});

export const {setClasses} = classSlice.actions;
export const classesReducer = classSlice.reducer;
