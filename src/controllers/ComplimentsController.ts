import { NextFunction, Request, Response } from "express";
import CreateComplimentService from "../services/CreateComplimentService";

export default class ComplimentsController {
    async create(req: Request, res: Response, next: NextFunction) {
        const { userSender, userReceiver, tagId, message } = req.body;
        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            userSender,
            userReceiver,
            tagId,
            message
        });

        res.json({ status: "success", data: { compliment } });
    }
}
