import type { Dispatch } from "react";
import type { UnknownAction } from "@reduxjs/toolkit";
import { deleteStudent } from "../slices/student.slice";
import { unAssignStudentFromClass } from "../slices/class.slice";
import type { IStudent } from "../../interfaces/student.interface";

export const handleDeleteStudent = (
  dispatch: Dispatch<UnknownAction>,
  selectedStudent: IStudent
) => {
  dispatch(deleteStudent(selectedStudent.studentId));
  dispatch(
    unAssignStudentFromClass({
      classId: Number(selectedStudent.classId),
      studentId: selectedStudent.studentId,
    })
  );
};
