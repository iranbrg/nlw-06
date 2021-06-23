import { NextFunction, Request, Response } from "express";
// import { AppError } from "../../utils/errors";

export default function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err.stack);

    // if (err instanceof AppError) {
    // if (err.name === "AppError") {
    if (err instanceof Error) {
        return res.status(400).json({ status: "error", message: err.message });
    }

    res.status(500).json({ status: "error", message: "Internal Server Error" });
}
