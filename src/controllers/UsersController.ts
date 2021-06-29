import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";

export default class UsersController {
    async create(req: Request, res: Response) {
        const createUserService = new CreateUserService();

        const { name, email, password, isAdmin } = req.body;

        const user = await createUserService.execute({
            name,
            email,
            password,
            isAdmin
        });

        res.json({ status: "success", data: { user } });
    }
}
