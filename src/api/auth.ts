

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

export const signup = async (data: SignupData): Promise<string> => {
    try {
        const rawResponse = await fetch(`${baseUrl}/v1/signup`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data),
        });

        const content: SignupSuccessResponse | string = await rawResponse.json();

        if(rawResponse.status === 200) {
            return (content as SignupSuccessResponse).token;
        }

        return content as string;
    } catch(err) {
        console.error(err);
    }
}