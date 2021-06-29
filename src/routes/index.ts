import { Router } from "express";
import usersRoutes from "./usersRoutes";
import tagsRoutes from "./tagsRoutes";
import sessionsRoutes from "./sessionsRoutes";
import complimentsRoutes from "./complimentsRoutes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/tags", tagsRoutes);
router.use("/sessions", sessionsRoutes);
router.use("/compliments", complimentsRoutes);

export default router;
