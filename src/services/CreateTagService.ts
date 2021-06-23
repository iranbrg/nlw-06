import { getCustomRepository } from "typeorm";
import TagsRepository from "../repositories/TagsRepository";

interface ITagRequest {
    name: string;
}

export default class CreateTagService {
    async execute({ name }: ITagRequest) {
        const tagsRepository = getCustomRepository(TagsRepository);

        const checkTagExists = await tagsRepository.findOne({ name });

        if (checkTagExists) {
            throw new Error("A tag with this name already exists");
        }

        const newTag = await tagsRepository.createAndSave({ name });

        return newTag;
    }
}
