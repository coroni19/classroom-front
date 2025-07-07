import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TStudent } from "../../types/class.type";

const initialState: TStudent[] = [];

export const studentSlice = createSlice({
  name: "students",
  initialState: initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<TStudent[]>) => {
      return [...state, ...action.payload];
    },
    deleteStudent: (state, action: PayloadAction<string>) => {
      return state.filter((student) => student.studentId !== action.payload);
    },
  },
});

export const { setStudents, deleteStudent } = studentSlice.actions;
export const studentsReducer = studentSlice.reducer;
