import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersReporitory";
import { AuthError } from "../utils/errors";

export default async function verifyIsAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { id } = req.user;
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne(id);

    if (!user?.isAdmin) {
        throw new AuthError("User must be an admin");
    }

    next();
}
