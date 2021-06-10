import {Service} from "typedi";
import {Repository, Sequelize} from "sequelize-typescript";
import HealthDaoFactory from "../factory/HealthDaoFactory";
import Pokemon from "../model/Pokemon";

@Service({ factory: [HealthDaoFactory, 'create'] })
class HealthDao {

    private repository: Repository<Pokemon>;

    constructor(private sequelize: Sequelize) {
        this.repository = this.sequelize.getRepository(Pokemon);
    }

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

    async testTable(): Promise<Pokemon[]> {
        return await this.repository.findAll();
    }
}

export default HealthDao;