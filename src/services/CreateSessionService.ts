import { AppError } from "../../utils/errors";
import { IAuthentication } from "../../utils/interfaces";
import UsersRepository from "../repositories/UsersReporitory";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";

export default class CreateSessionService {
    async execute({ email, password }: IAuthentication) {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne({ email });

        if (!user) {
            throw new AppError("Email or password incorrect");
        }

        const isPassordCorrect = await compare(password, user.password);

        if (!isPassordCorrect) {
            throw new AppError("Email or password incorrect");
        }

        const token = sign({ sub: user.id, email }, "secretKey", {
            expiresIn: "1d"
        });

        const { password: passwrd, ...data } = user;

        return { ...data, token };
    }
}
