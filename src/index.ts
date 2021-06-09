import "reflect-metadata";
import express from "express";
import cors from "cors";
import routes from "./route";

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