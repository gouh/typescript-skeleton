import {Application} from "express";
import HealthController from "../controller/HealthController";
import Container from "../config/container";

export default function (app: Application) {
    const healthController: HealthController = Container.get(HealthController);
    app.get('/health', (req, res) => healthController.main(req, res));
}