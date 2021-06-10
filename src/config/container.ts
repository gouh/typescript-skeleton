import sequelize from "./sequelize";
import Container from "typedi";

Container.set('sequelize', sequelize);

export default Container;