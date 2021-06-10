import {Service} from "typedi";
import {Sequelize} from "sequelize-typescript";
import HealthDaoFactory from "../factory/HealthDaoFactory";

@Service({ factory: [HealthDaoFactory, 'create'] })
class HealthDao {
    constructor(private sequelize: Sequelize) {}

    /**
     * @return boolean
     */
    async testConnection(): Promise<boolean> {
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
            return true;
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            return false;
        }
    }
}

export default HealthDao;