import { NextFunction, Request, Response } from "express";
import { AppError } from "../../utils/errors";

export default function errorHandler(
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err.stack);

    if (err instanceof AppError) {
        return res
            .status(err.statusCode)
            .json({ status: "error", message: err.message });
    }

    res.status(500).json({ status: "error", message: "Internal Server Error" });
}
