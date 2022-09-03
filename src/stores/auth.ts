import { defineStore } from 'pinia';
import { signup } from '../api/auth';
import {ref, computed } from "vue";

export type AccountPayload = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export const useAuthStore = defineStore('auth', () => {
    const userToken = ref<string | null>('');
    const loading = ref(false);

    const isLoggedIn = computed(()=> userToken.value !== null && userToken.value !== '');
    const createNewAccount = async (data: AccountPayload) => {
        const token = await signup({
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.passwordConfirmation
        });

        userToken.value = token;
    };

    return { loading, createNewAccount, userToken, isLoggedIn };
});