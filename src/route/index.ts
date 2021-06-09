import {Application} from "express";
import Container from "typedi";
import HealthController from "../controller/HealthController";

export default function (app: Application) {
    const healthController = Container.get(HealthController);

    app.get('/health', (req, res) => healthController.main(req, res));
}