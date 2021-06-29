import { Router } from "express";
import usersRoutes from "./usersRoutes";
import tagsRoutes from "./tagsRoutes";
import sessionsRoutes from "./sessionsRoutes";
import complimentsRoutes from "./complimentsRoutes";
import ensureAuthentication from "../middlewares/ensureAuthetication";
import verifyIsAdmin from "../middlewares/verifyIsAdmin";

const router = Router();

router.use("/users", usersRoutes);
router.use("/tags", ensureAuthentication, verifyIsAdmin, tagsRoutes);
router.use("/sessions", sessionsRoutes);
router.use("/compliments", ensureAuthentication, complimentsRoutes);

export default router;
