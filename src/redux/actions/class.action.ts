import type { AppDispatch } from "../store";
import { deleteStudent } from "../slices/student.slice";
import { unAssignStudentFromClass } from "../slices/class.slice";
import type { IStudent } from "../../interfaces/student.interface";

export const handleDeleteStudent = (
  dispatch: AppDispatch,
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
