<script lang="ts" setup>
import CardPage from '/src/components/CardPage.vue';
import Link from '/src/components/Link.vue';
import LoginForm from './LoginForm.vue';
import { useAuthStore } from "../../stores/auth";
import { storeToRefs } from 'pinia';
import { FormFields } from './types';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useAuthStore();
const { loading, errorMessage } = storeToRefs(store);

const onSubmit = async (data: FormFields) => {
    const success = await store.login(data);
    if (success) {
      router.push({ path: '/'});
    }
};

</script>
<template>
    <section>
        <CardPage>
            <h1 class="title">Welcome back!</h1>
            <p class="description">Please enter your credentials!</p>
            <p class="description-sm">Don't have an account? <Link to="/signup">Sign up here</Link></p>
            <p class="error-message"><span v-if="errorMessage && !loading">{{ errorMessage }}</span></p>
            <LoginForm :loading="loading" @submit="onSubmit" />
        </CardPage>
    </section>
</template>
<style lang="postcss" scoped>
  .title {
    @apply mt-2;
    @apply pl-6;
    @apply text-[#4E5FA5];
    @apply text-3xl;
    @apply font-bold;
  }

  .error-message {
    @apply text-sm;
    @apply text-red-600;
    @apply text-center;
    text-transform: capitalize;
    @apply h-[20px];
    @apply mt-1;
  }

  .description {
    @apply pl-6;
    @apply text-xl;
    @apply mt-2;
  }
  .description-sm {
    @apply pl-6;
    @apply text-base;
    @apply mt-1;
  }
</style>