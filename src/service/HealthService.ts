import {Service} from "typedi";
import HealthDao from "../dao/HealthDao";

@Service()
class HealthService {
    constructor(private healthDao: HealthDao) {}

    async dbConnection(): Promise<boolean> {
        return this.healthDao.testConnection();
    }

    getNodeVersion(): string {
        return process.version;
    }
}

export default HealthService;