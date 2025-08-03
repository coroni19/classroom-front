import type { Path } from "react-hook-form";
import type { IStudent } from "../../interfaces/student.interface";

export const TABLE_TITLES = [
  "ID",
  "First name",
  "Last name",
  "Age",
  "Profession",
  "Assign",
  "Delete",
];

export const STUDENT_INFO_COLUMNS: Path<IStudent>[] = [
  "studentId",
  "firstName",
  "lastName",
  "age",
  "profession",
];
