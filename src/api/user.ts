import { ApiError, ApiUser, RequestOptions } from "./types";

const baseUrl = import.meta.env.VITE_API_URL;

export const getUser = async (options?: RequestOptions): Promise<ApiUser | ApiError | undefined> => {
    let token = ''
    if (options) {
        token = options.token;
    }

    try {
        const rawResponse = await fetch(`${baseUrl}/v1/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            method: 'GET',
            mode: 'cors'
        });
        const content: ApiUser | ApiError = await rawResponse.json();
        return content;
    } catch(err) {
        console.error(err);
    }
};