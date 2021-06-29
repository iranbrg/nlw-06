import { Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionService";

export default class SesssionsController {
    async create(req: Request, res: Response) {
        const { email, password } = req.body;
        const createSessionService = new CreateSessionService();

        const user = await createSessionService.execute({ email, password });

        res.json({ status: "success", data: { user } });
    }
}
