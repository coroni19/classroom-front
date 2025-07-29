import {
  assignStudentToClass,
  unAssignStudentFromClass,
} from "../slices/class.slice";

import type { Dispatch } from "react";
import type { UnknownAction } from "@reduxjs/toolkit";
import type { IClass } from "../../interfaces/class.interface";
import type { IStudent } from "../../interfaces/student.interface";
import { assignClassToStudent, unAssignStudent } from "../slices/student.slice";

export const handleAssignStudentToClass = (
  dispatch: Dispatch<UnknownAction>,
  selectedStudent: IStudent,
  classId: number
) => {
  dispatch(
    unAssignStudentFromClass({
      classId: Number(selectedStudent.classId),
      studentId: selectedStudent.studentId,
    })
  );
  dispatch(
    assignStudentToClass({
      classId: Number(classId),
      student: selectedStudent,
    })
  );
  dispatch(
    assignClassToStudent({
      classId: Number(classId),
      studentId: selectedStudent.studentId,
    })
  );
};

export const handleUnAssignStudentFromClass = async (
  dispatch: Dispatch<UnknownAction>,
  selectedClass: IClass,
  studentId: string
) => {
  dispatch(
    unAssignStudentFromClass({
      classId: selectedClass.classId,
      studentId: studentId,
    })
  );
  dispatch(unAssignStudent({ studentId: studentId }));
};
