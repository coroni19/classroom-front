import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../config/axios.config";
import type { IStudent, IStudentDto } from "../interfaces/student.interface";

class StudentService {
  private api: AxiosInstance;

  constructor() {
    this.api = createAxiosInstance(`${import.meta.env.VITE_BASE_URL}/students`);
  }

  public async getAllStudents(): Promise<IStudent | null> {
    try {
      const res = await this.api.get("");
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async deleteStudent(id: string): Promise<void> {
    try {
      await this.api.delete(`/${id}`);
      console.log(`Student with id ${id} deleted successfully.`);
    } catch (error) {
      console.log(error);
    }
  }

  public async assign(studentId: string, classId: number): Promise<void> {
    try {
      await this.api.patch(`/assign/${studentId}`, {classId: classId});
      console.log(
        `Student with id ${studentId} successfully assigned to class with id ${classId}.`
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async unassign(studentId: string): Promise<void> {
    try {
      await this.api.patch(`/unassign/${studentId}`);
      console.log(`Student with id ${studentId} successfully unassigned.`);
    } catch (error) {
      console.log(error);
    }
  }

  public async createStudent(studentDto: IStudentDto): Promise<void> {
    try {
      await this.api.post("", {
        studentId: studentDto.studentId,
        firstName: studentDto.firstName,
        lastName: studentDto.lastName,
        age: Number(studentDto.age),
        profession: studentDto.profession,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const studentService = new StudentService();

export default studentService;
