import { defineStore } from 'pinia';
import { signup, signin } from '../api/auth';
import { getToken, storeToken } from '../api/local-storage';
import { ref, computed, onMounted } from "vue";
import { ApiError } from '../api/types';
import { useUserStore } from './user';

export type AccountPayload = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export type LoginPayload = {
    email: string;
    password: string;
}

type MessageCodeMap = {
    [key: number]: string;
}

const errorMessageCodeMap: MessageCodeMap = {
    1: 'User already exists',
    2: 'Invalid username or password'
}

export const useAuthStore = defineStore('auth', () => {
    const userToken = ref<string | null>(null);
    const loading = ref(false);
    const errorMessage = ref<string>('');
    const isLoggedIn = computed(() => userToken.value !== null && userToken.value !== '');
    const userStore = useUserStore();

    const setErrorMessage = ({ message, code }: ApiError) => {
        errorMessage.value = errorMessageCodeMap[code] || message;
    };
    const createNewAccount = async (data: AccountPayload): Promise<boolean> => {
        loading.value = true;
        const response = await signup({
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.passwordConfirmation
        });
        loading.value = false;
        if (!response) {
            errorMessage.value = 'Error';
            return false;
        }
        if (typeof response === 'string') {
            userToken.value = response;
            userStore.fetchUser(userToken.value);
            storeToken(userToken.value);
            return true;
        }
        setErrorMessage(response);
        return false;
    };

    const cleanError = () => {
        errorMessage.value = '';
    };

    const login = async ({ email, password }: LoginPayload): Promise<boolean> => {
        loading.value = true;
        const response = await signin({ email, password });
        loading.value = false;
        if (!response) {
            errorMessage.value = 'Error';
            return false;
        }
        if (typeof response === 'string') {
            userToken.value = response;
            userStore.fetchUser(userToken.value);
            storeToken(userToken.value);
            return true;
        }
        setErrorMessage(response);
        return false;
    };

    const logout = () => {
        userToken.value = null;
        userStore.cleanUser();
    }

    const loadDataFromLocalStorage = () => {
        const token = getToken();
        if (token) {
            userToken.value;
            userStore.fetchUser(token);
        }
    }
    onMounted(loadDataFromLocalStorage)
    return { loading, createNewAccount, userToken, isLoggedIn, errorMessage, cleanError, login, logout };
});