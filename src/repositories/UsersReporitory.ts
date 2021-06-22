import { EntityRepository, Repository } from "typeorm";
import { IUserCredentials } from "../../utils/interfaces";
import Users from "../models/Users";

@EntityRepository(Users)
export default class UsersRepository extends Repository<Users> {
    async createAndSave(user: IUserCredentials) {
        const newUser = this.create(user);
        await this.save(newUser);
        return newUser;
    }
}
