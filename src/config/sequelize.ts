import { Sequelize } from 'sequelize-typescript'

console.log(__dirname + './../model');

const sequelize = new Sequelize({
    logging: console.log,
    database: 'ts_project',
    dialect: 'mysql',
    username: 'root',
    password: 'admin',
    models: [__dirname + '/../model'],
    host: 'local-mysql-57',
    port: 3306,
    repositoryMode: true
});

export default sequelize;