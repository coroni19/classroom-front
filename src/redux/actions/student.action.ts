import {
  assignStudentToClass,
  unAssignStudentFromClass,
} from "../slices/class.slice";

import type { AppDispatch } from "../store";
import type { IClass } from "../../interfaces/class.interface";
import type { IStudent } from "../../interfaces/student.interface";
import { assignClassToStudent, unAssignStudent } from "../slices/student.slice";

export const handleAssignStudentToClass = (
  dispatch: AppDispatch,
  selectedStudent: IStudent,
  classId: number
) => {
  if (selectedStudent.classId) {
    dispatch(
      unAssignStudentFromClass({
        classId: Number(selectedStudent.classId),
        studentId: selectedStudent.studentId,
      })
    );
  }

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
  dispatch: AppDispatch,
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
