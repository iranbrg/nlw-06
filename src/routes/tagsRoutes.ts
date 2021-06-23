import { Router } from "express";
import TagsController from "../controllers/TagsController";

const router = Router();

const tagsController = new TagsController();

router.post("/", tagsController.create);

export default router;
