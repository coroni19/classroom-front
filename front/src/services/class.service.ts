import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../config/axios.config";
import type { IClass, IClassDto } from "../interfaces/class.interface";

class ClassService {
  private api: AxiosInstance;

  constructor() {
    this.api = createAxiosInstance(`${import.meta.env.VITE_BASE_URL}/classes`);
  }

  public async getAllClasses(): Promise<IClass | null> {
    try {
      const res = await this.api.get("");
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async createClass(classDto: IClassDto): Promise<any> {
    try {
      await this.api.post("", {
        classId: Number(classDto.classId),
        className: classDto.className,
        maxSeats: Number(classDto.maxSeats),
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async deleteClass(classId: number): Promise<void> {
    try {
      await this.api.delete(`/${classId}`);
    } catch (error) {
      throw error;
    }
  }
}

const classService = new ClassService();

export default classService;
