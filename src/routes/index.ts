import { Router } from "express";
import usersRoutes from "./usersRoutes";
import tagsRoutes from "./tagsRoutes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/tags", tagsRoutes);

export default router;
