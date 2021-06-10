import {Service} from "typedi";
import HealthDao from "../dao/HealthDao";
import Pokemon from "../model/Pokemon";

@Service()
class HealthService {
    constructor(private healthDao: HealthDao) {}

    async dbConnection(): Promise<boolean> {
        return await this.healthDao.testConnection();
    }

    async tableRows(): Promise<Pokemon[]>{
        return this.healthDao.testTable()
    }

    getNodeVersion(): string {
        return process.version;
    }
}

export default HealthService;