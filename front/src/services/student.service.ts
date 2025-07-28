import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../config/axios.config";
import type { IStudent, IStudentDto } from "../interfaces/student.interface";

class StudentService {
  private api: AxiosInstance;

  constructor() {
    this.api = createAxiosInstance(`${import.meta.env.VITE_BASE_URL}/students`);
  }

  public async getAllStudents(): Promise<IStudent | null> {
    const res = await this.api.get("");
    return res.data;
  }

  public async deleteStudent(id: string): Promise<void> {
    await this.api.delete(`/${id}`);
  }

  public async assign(studentId: string, classId: number): Promise<void> {
    await this.api.patch(`/assign/${studentId}`, { classId: classId });
  }

  public async unassign(studentId: string): Promise<void> {
    await this.api.patch(`/unassign/${studentId}`);
  }

  public async createStudent(studentDto: IStudentDto): Promise<void> {
    await this.api.post("", {
      studentId: studentDto.studentId,
      firstName: studentDto.firstName,
      lastName: studentDto.lastName,
      age: Number(studentDto.age),
      profession: studentDto.profession,
    });
  }
}

const studentService = new StudentService();

export default studentService;
