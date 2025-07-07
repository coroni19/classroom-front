import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../../config/axios.config";

class StudentService {
  private api: AxiosInstance;

  constructor() {
    this.api = createAxiosInstance(
      `${import.meta.env.VITE_BASE_URL}/students`
    );
  }

  public async getAllStudents(): Promise<any> {
    try {
      const res = await this.api.get("");
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async deleteStudent(id: string) {
    try {
      await this.api.delete(`/${id}`);
      console.log(`Item with id ${id} deleted successfully.`);
    } catch (error) {
      console.log(error);
    }
  }
}

const studentService = new StudentService();

export default studentService;
