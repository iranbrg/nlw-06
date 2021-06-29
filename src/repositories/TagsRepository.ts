import { EntityRepository, Repository } from "typeorm";
import { ITag } from "../utils/interfaces";
import Tags from "../models/Tags";

@EntityRepository(Tags)
export default class TagsRepository extends Repository<Tags> {
    async createAndSave({ name }: ITag) {
        const newTag = this.create({ name });
        await this.save(newTag);

        return newTag;
    }
}
