import { NextFunction, Request, Response } from "express";
import CreateComplimentService from "../services/CreateComplimentService";
import ListUserReceivedComplimentsService from "../services/ListUserReceivedComplimentsService";

export default class ComplimentsController {
    async create(req: Request, res: Response, next: NextFunction) {
        const { userReceiver, tagId, message } = req.body;
        const createComplimentService = new CreateComplimentService();
        const { id: userSender } = req.user;

        const compliment = await createComplimentService.execute({
            userSender,
            userReceiver,
            tagId,
            message
        });

        res.json({ status: "success", data: { compliment } });
    }

    async index(req: Request, res: Response, next: NextFunction) {
        const { id: userId } = req.user;

        const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService();

        const receivedCompliments = await listUserReceivedComplimentsService.execute(
            {
                userId
            }
        );

        res.json({
            status: "success",
            data: { compliments: receivedCompliments }
        });
    }
}
