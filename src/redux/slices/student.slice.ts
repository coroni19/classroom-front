import type { IStudent } from "../../interfaces/student.interface";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: IStudent[] = [];

export const studentSlice = createSlice({
  name: "students",
  initialState: initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<IStudent[]>) => {
      return [...state, ...action.payload];
    },
    addStudent: (state, action: PayloadAction<IStudent>) => {
      return [...state, action.payload];
    },
    deleteStudent: (state, action: PayloadAction<string>) => {
      return state.filter((student) => student.studentId !== action.payload);
    },
    unAssignStudent: (state, action: PayloadAction<{ studentId: string }>) => {
      return [...state].map((student) => {
        if (student.studentId == action.payload.studentId) {
          return { ...student, classId: null };
        }
        return student;
      });
    },
    assignClassToStudent: (
      state,
      action: PayloadAction<{ studentId: string; classId: number }>
    ) => {
      return [...state].map((student) => {
        if (student.studentId == action.payload.studentId) {
          return { ...student, classId: action.payload.classId };
        }
        return student;
      });
    },
  },
});

export const {
  addStudent,
  setStudents,
  deleteStudent,
  unAssignStudent,
  assignClassToStudent,
} = studentSlice.actions;

export const studentsReducer = studentSlice.reducer;
