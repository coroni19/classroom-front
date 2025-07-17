import type { IStudent } from "./student.interface";

export interface IClass {
  classId: number;
  className: string;
  maxSeats: number;
  students: IStudent[];
}

export interface IClassDto {
  classId: number;
  className: string;
  maxSeats: number;
}
