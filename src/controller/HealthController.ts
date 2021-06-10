import {Request, Response} from "express";
import {ReasonPhrases, StatusCodes} from "http-status-codes";
import {Service} from "typedi";
import HealthService from "../service/HealthService";

@Service()
class HealthController {
    constructor(private healthService: HealthService) {}

    public async main(_req: Request, res: Response) {
        return res.json({
            'success': true,
            'time': +new Date(),
            'http_status_code': StatusCodes.OK,
            'http_message': ReasonPhrases.OK,
            'data': {
                'node': this.healthService.getNodeVersion(),
                'db': await this.healthService.dbConnection()
            }
        });
    }

}

export default HealthController;