import { EntityRepository, Repository } from "typeorm";
import { IUser } from "../../utils/interfaces";
import Users from "../models/Users";

@EntityRepository(Users)
export default class UsersRepository extends Repository<Users> {
    async createAndSave({ name, email, password, isAdmin }: IUser) {
        const newUser = this.create({ name, email, password, isAdmin });
        await this.save(newUser);

        return newUser;
    }
}
