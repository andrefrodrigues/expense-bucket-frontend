import { defineStore } from "pinia";
import { ApiUser } from "../api/types";
import { getUser } from "../api/user";
import { ref, computed } from 'vue';

type User = {
    name: string;
    email: string;
}

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);
    const isLoggedIn = computed<boolean>(() => user.value !== null);
    const fetchUser = async (token: string) => {
        const result = await getUser({ token });
        if (!result) {
            return;
        }
        if ((result as ApiUser).name) {
            const { name, email } = result as ApiUser;
            user.value = {
                name,
                email 
            }
        }
    };

    const cleanUser = () => {
        user.value = null;
    }
    return { fetchUser, user, isLoggedIn, cleanUser }
});