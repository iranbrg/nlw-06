import "reflect-metadata";
import express from "express";
import "express-async-errors";
import router from "./routes";
import "./database";
import errorHandler from "./middlewares/errorHandler";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}/`)
);
