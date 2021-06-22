import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersReporitory";
import { IUserCredentials } from "../../utils/interfaces";

export default class CreateUserService {
    async execute({ name, email, isAdmin }: IUserCredentials) {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne({ email });

        if (user) {
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
