<script setup lang="ts">
import CardPage from '/src/components/CardPage.vue';
import SignupForm from './SignupForm.vue';
import { useAuthStore } from "../../stores/auth";
import { storeToRefs } from 'pinia';
import { FormFields } from './types';
import { useRouter } from 'vue-router';
import Link from '../../components/Link.vue';

const store = useAuthStore();
const { loading, errorMessage } = storeToRefs(store);
const router = useRouter();
const onSubmit = async (data: FormFields) => {
    const success = await store.createNewAccount(data);
    if (success) {
      router.push({ path: '/'});
    }
};

const onReset = () => {
  store.cleanError();
}
</script>
<template>
    <CardPage>
        <h1 class="title">Sign up</h1>
    <p class="description">Create a new account</p>
    <p class="description-sm">Already have an account? <Link to="/login">Login here</Link></p>
    <p class="error-message"><span v-if="errorMessage && !loading">{{ errorMessage }}</span></p>
    <div class="form-wrapper">
      <SignupForm @submit="onSubmit" :loading="loading" @reset="onReset"/>
    </div>
    </CardPage>
</template>
<style lang="postcss" scoped>
  .title {
    @apply mt-2;
    @apply pl-6;
    @apply text-[#4E5FA5];
    @apply text-3xl;
    @apply font-bold;
  }
  .description {
    @apply pl-6;
    @apply text-xl;
    @apply mt-2;
  }

  .error-message {
    @apply text-sm;
    @apply text-red-600;
    @apply text-center;
    text-transform: capitalize;
    @apply h-[20px];
    @apply mt-1;
  }

  .form-wrapper {
    @apply -mt-4;
  }
  .description-sm {
    @apply pl-6;
    @apply text-base;
    @apply mt-1;
  }
</style>