import { defineStore } from 'pinia';
import { signup } from '../api/auth';
import {ref, computed } from "vue";
import { ApiError } from '../api/types';

export type AccountPayload = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

type MessageCodeMap = {
    [key: number]: string;
}

const errorMessageCodeMap: MessageCodeMap = {
    1: 'User already exists'
}

export const useAuthStore = defineStore('auth', () => {
    const userToken = ref<string | null>('');
    const loading = ref(false);
    const errorMessage = ref<string>('');
    const isLoggedIn = computed(()=> userToken.value !== null && userToken.value !== '');

    const setErrorMessage = ({message, code }: ApiError) => {
        errorMessage.value = errorMessageCodeMap[code] || message;
    };

    const createNewAccount = async (data: AccountPayload) => {
        loading.value = true;
        const response = await signup({
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.passwordConfirmation
        });
        loading.value = false;
        if (!response) {
            return;
        }
        if (typeof response === 'string') {
            return userToken.value = response;
        }
        setErrorMessage(response);
    };

    const cleanError = () => {
        errorMessage.value = '';
    }
    return { loading, createNewAccount, userToken, isLoggedIn, errorMessage, cleanError };
});