import {Sequelize} from "sequelize-typescript"

const sequelize = new Sequelize({
    logging: console.log,
    dialect: "mysql",
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    models: [__dirname + '/../model'],
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    repositoryMode: true
});

export default sequelize;