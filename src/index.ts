import "reflect-metadata";
import express from "express";
import cors from "cors";
import routes from "./route";
import Container from "./config/container"
import {Sequelize} from "sequelize-typescript";

/**
 * Function to sync db models
 */
const syncDb = async () => {
    let sequelize: Sequelize = Container.get('sequelize');
    try {
        await sequelize.sync({force: true});
        console.log('Synchronization complete...');
    } catch (error) {
        console.error('Error on synchronizing:', error);
    }
};

const main = async () => {
    const app = express();
    app.use(cors());
    routes(app);

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Hi the server is runing in ${process.env.SERVER_PORT}`);
    });
};

main().catch(err => {
    console.error(err);
});