import {Request, Response} from "express";
import {ReasonPhrases, StatusCodes} from "http-status-codes";
import {Service} from "typedi";

@Service()
class HealthController {

    public async main(_req: Request, res: Response) {
        return res.json({
            'success': true,
            'time': +new Date(),
            'http_status_code': StatusCodes.OK,
            'http_message': ReasonPhrases.OK,
            'data': {
                'node': process.version
            }
        });
    }

}

export default HealthController;