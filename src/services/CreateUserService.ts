import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersReporitory";
import { IUser } from "../../utils/interfaces";
import { AppError } from "../../utils/errors";
import { hash } from "bcryptjs";

export default class CreateUserService {
    async execute({ name, email, password, isAdmin }: IUser) {
        const usersRepository = getCustomRepository(UsersRepository);

        const checkUserExists = await usersRepository.findOne({ email });

        if (checkUserExists) {
            throw new AppError("Email address already in use");
        }

        const hashedPassword = await hash(password, 8);

        const newUser = await usersRepository.createAndSave({
            name,
            email,
            password: hashedPassword,
            isAdmin
        });

        return newUser;
    }
}
