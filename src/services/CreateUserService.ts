import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersReporitory";
import { IUser } from "../../utils/interfaces";
// import { AppError } from "../../utils/errors";

export default class CreateUserService {
    async execute({ name, email, isAdmin }: IUser) {
        const usersRepository = getCustomRepository(UsersRepository);

        const checkUserExists = await usersRepository.findOne({ email });

        if (checkUserExists) {
            // throw new AppError("Email address already in use");
            throw new Error("Email address already in use");
        }

        const newUser = await usersRepository.createAndSave({
            name,
            email,
            isAdmin
        });

        return newUser;
    }
}
