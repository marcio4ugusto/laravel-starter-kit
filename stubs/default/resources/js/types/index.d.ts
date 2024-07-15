export interface IApp {
    name: string;
}

export interface IFlash {
    type: string;
    message: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    app: IApp,
    auth: {
        user: IUser;
    },
    flash: IFlash
};
