import type { IClass } from "../../interfaces/class.interface";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IStudent } from "../../interfaces/student.interface";

const initialState: IClass[] = [];

export const classSlice = createSlice({
  name: "classes",
  initialState: initialState,
  reducers: {
    setClasses: (state, action: PayloadAction<IClass[]>) => {
      return [...state, ...action.payload];
    },
    addClass: (state, action: PayloadAction<IClass>) => {
      return [...state, action.payload];
    },
    unAssignStudent: (
      state,
      action: PayloadAction<{ classId: number; studentId: string }>
    ) => {
      return [...state].map((cls) => {
        if (cls.classId === action.payload.classId) {
          return {
            ...cls,
            students: cls.students.filter(
              (student) => student.studentId !== action.payload.studentId
            ),
          };
        }
        return cls;
      });
    },
    assignStudent: (
      state,
      action: PayloadAction<{ student: IStudent; classId: number }>
    ) => {
      return [...state].map((cls) => {
        if (cls.classId === action.payload.classId) {
          return {
            ...cls,
            students: [...cls.students, action.payload.student],
          };
        }
        return cls;
      });
    },
    deleteClass: (state, action: PayloadAction<{ classId: number }>) => {
      return [...state].filter((cls) => cls.classId !== action.payload.classId);
    },
  },
});

export const {
  addClass,
  setClasses,
  deleteClass,
  assignStudent,
  unAssignStudent,
} = classSlice.actions;

export const classesReducer = classSlice.reducer;
