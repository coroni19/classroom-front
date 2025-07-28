export interface IStudent {
  studentId: string;
  firstName: string;
  lastName: string;
  age: number | null;
  profession: string;
  classId: number | null;
}

export interface IStudentDto {
  studentId: string;
  firstName: string;
  lastName: string;
  age: number | null;
  profession: string;
}
