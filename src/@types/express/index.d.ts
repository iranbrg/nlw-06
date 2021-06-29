declare namespace Express {
    export interface Request {
        user: {
            id: string;
            // name: string;
            // email: string;
            // isAdmin: boolean;
        };
    }
}

// export interface JwtPayload {
//     name?: string;
//     email?: string;
//     isAdmin?: boolean;
// }
