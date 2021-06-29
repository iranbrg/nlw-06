import { getCustomRepository } from "typeorm";
import { AppError } from "../../utils/errors";
import { ICompliment } from "../../utils/interfaces";
import ComplimentsRepository from "../repositories/ComplimentsRepository";
import UsersRepository from "../repositories/UsersReporitory";

export default class CreateComplimentService {
    async execute({ userSender, userReceiver, tagId, message }: ICompliment) {
        const complimentsRepository = getCustomRepository(
            ComplimentsRepository
        );
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne(userReceiver);

        if (userSender === userReceiver) {
            throw new AppError("You can't compliment yourself");
        }

        if (!user) {
            throw new AppError("User doesn't exist");
        }

        console.log("THIS SHOULD NOT RUN");
        const compliment = complimentsRepository.create({
            userSender,
            userReceiver,
            tagId,
            message
        });
        await complimentsRepository.save(compliment);

        return compliment;
    }
}
