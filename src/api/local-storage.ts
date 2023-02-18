
const TOKEN_KEY = 'token';

export const getToken = (): string | undefined => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (!token) {
        return;
    }
    return token;
}

export const storeToken = (token: string): void => {
    window.localStorage.setItem(TOKEN_KEY, token);
}