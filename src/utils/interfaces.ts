export interface IUser {
    name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
}

export interface ITag {
    name: string;
}

export interface IAuthentication {
    email: string;
    password: string;
}

export interface ICompliment {
    userSender: string;
    userReceiver: string;
    tagId: string;
    message: string;
}

// TODO: implement JSendResponse
// export interface JSendResponse<T extends "success" | "fail" | "error"> {
//     status: T;
//     data: any;
// }

// TODO: implement ICustomRepository
