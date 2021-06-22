import { Router } from "express";
import usersRoutes from "./usersRoutes";

const router = Router();

router.use("/users", usersRoutes);

export default router;
