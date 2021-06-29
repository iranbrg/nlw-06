export class AppError extends Error {
    readonly name: string = "AppError";
    statusCode: number;

    constructor(message?: string, statusCode: number = 400) {
        super(message);
        Object.setPrototypeOf(this, AppError.prototype);

        this.statusCode = statusCode;
    }
}

export class AuthError extends AppError {
    readonly name: string = "AuthError";

    constructor(message?: string) {
        super(message, 401);
    }
}
