export type TClass = {
  classId: number;
  className: string;
  maxSeats: number;
  students: TStudent[];
};

export type TStudent = {
  studentId: string;
  firstName: string;
  lastName: string;
  age: number;
  profession: string;
  classes: TClass[];
};
