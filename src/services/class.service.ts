import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../config/axios.config";
import type { IClass, IClassDto } from "../interfaces/class.interface";

class ClassService {
  private api: AxiosInstance;

  constructor() {
    this.api = createAxiosInstance(`${import.meta.env.VITE_BASE_URL}/classes`);
  }

  public async getAll(): Promise<IClass | null> {
    const res = await this.api.get("");
    return res.data;
  }

  public async create(classDto: IClassDto): Promise<any> {
    await this.api.post("", {
      classId: Number(classDto.classId),
      className: classDto.className,
      maxSeats: Number(classDto.maxSeats),
    });
  }

  public async delete(classId: number): Promise<void> {
    await this.api.delete(`/${classId}`);
  }
}

const classService = new ClassService();

export default classService;
