export type RequestOptions = {
    token: string;
}

export type ApiError = {
    code: number;
    message: string;
}

export type ApiUser = {
    name: string;
    email: string;
    created_at: string;
};