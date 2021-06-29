import { getCustomRepository } from "typeorm";
import ComplimentsRepository from "../repositories/ComplimentsRepository";
import UsersRepository from "../repositories/UsersReporitory";
import { AppError } from "../utils/errors";

export default class ListUserReceivedComplimentsService {
    async execute({ userId }: { userId: string }) {
        const complimentsRepository = getCustomRepository(
            ComplimentsRepository
        );
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne(userId);

        if (!user) {
            throw new AppError("User not found");
        }

        const compliments = await complimentsRepository.find({
            where: { userReceiver: userId }
        });

        if (!compliments) {
            throw new AppError("User did not receive any compliments");
        }

        return compliments;
    }
}
