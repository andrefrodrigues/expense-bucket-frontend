import { ApiError } from './types';

export type SignupData = {
    name: string;
    email: string;
    password: string;
    password_confirmation:string;
};

type SignupSuccessResponse = {
    token: string;
}

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

        const content: SignupSuccessResponse | ApiError = await rawResponse.json();
        if(rawResponse.status === 200) {
            return (content as SignupSuccessResponse).token;
        }
        return content as ApiError;
    } catch(err) {
        console.error(err);
    }
}