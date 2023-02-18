import { ApiError } from './types';

export type SignupData = {
    name: string;
    email: string;
    password: string;
    password_confirmation:string;
};

export type LoginData = {
    email: string;
    password: string;
};

type SuccessResponse = {
    token: string;
};

const baseUrl = import.meta.env.VITE_API_URL;

export const signup = async (data: SignupData): Promise<string | ApiError | undefined> => {
    try {
        const rawResponse = await fetch(`${baseUrl}/v1/signup`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
        });

        const content: SuccessResponse | ApiError = await rawResponse.json();
        if(rawResponse.status === 200) {
            return (content as SuccessResponse).token;
        }
        return content as ApiError;
    } catch(err) {
        console.error(err);
    }
}


export const signin = async (data: LoginData): Promise<string | ApiError | undefined> => {
    try {
        const rawResponse = await fetch(`${baseUrl}/v1/login`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
        });
        const content: SuccessResponse | ApiError = await rawResponse.json();
        if (rawResponse.status === 200) {
            return (content as SuccessResponse).token;
        }
        return content as ApiError;
    } catch(err) {
        console.error(err);
    }
};