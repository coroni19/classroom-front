import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../../config/axios.config";

class ClassService {
  private api: AxiosInstance;

  constructor() {
    this.api = createAxiosInstance(`${import.meta.env.VITE_BASE_URL}`);
  }

  public async getAllClasses(): Promise<any> {
    try {
      const res = await this.api.get("/classes");
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

const classService = new ClassService();

export default classService;
