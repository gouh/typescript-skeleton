import HealthDao from "../dao/HealthDao";
import {Inject, Service} from "typedi";
import {Sequelize} from "sequelize-typescript";

@Service()
class HealthDaoFactory {
    constructor(@Inject('sequelize') private sequelize: Sequelize) {}

    create(): HealthDao {
        return new HealthDao(this.sequelize);
    }
}

export default HealthDaoFactory;