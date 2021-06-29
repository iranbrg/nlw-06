import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { JWTConfig } from "../config/auth";
import { AppError } from "../utils/errors";

export default function ensureAuthentication(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token's missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const payload = verify(token, JWTConfig.secretKey);

        const { sub } = payload;

        req.user = { id: sub as string };

        next();
    } catch (err) {
        throw err;
    }
}
