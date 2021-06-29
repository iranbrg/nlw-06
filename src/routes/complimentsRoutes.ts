import { Router } from "express";
import ComplimentsController from "../controllers/ComplimentsController";

const router = Router();

const complimentsController = new ComplimentsController();

router.post("/", complimentsController.create);

export default router;
