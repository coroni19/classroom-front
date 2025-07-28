import type { Path } from "react-hook-form";
import type { IStudent } from "../../interfaces/student.interface";

export const tableTitles = [
  "ID",
  "First name",
  "Last name",
  "Age",
  "Profession",
  "Assign",
  "Delete",
];

export const studentKeys: Path<IStudent>[] = [
  "studentId",
  "firstName",
  "lastName",
  "age",
  "profession",
];
