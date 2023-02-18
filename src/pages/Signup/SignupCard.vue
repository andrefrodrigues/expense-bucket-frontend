<script setup lang="ts">
import SignupForm from './SignupForm.vue';
import { useAuthStore } from "../../stores/auth";
import { storeToRefs } from 'pinia';
import { FormFields } from './types';
import { useRouter } from 'vue-router';

const store = useAuthStore();
const { loading, errorMessage } = storeToRefs(store);
const router = useRouter();
const onSubmit = (data: FormFields) => {
    const success = store.createNewAccount(data);
    if (success) {
      router.push({ path: '/'});
    }
};

const onReset = () => {
  store.cleanError();
}
</script>

<template>
  <div class="signup-card">
    <h1 class="title">Sign up</h1>
    <p class="description">Create a new account</p>
    <p class="error-message"><span v-if="errorMessage && !loading">{{ errorMessage }}</span></p>
    <div class="form-wrapper">
      <SignupForm @submit="onSubmit" :loading="loading" @reset="onReset"/>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .signup-card {
    @apply p-10 max-w-[450px];
    @apply mx-auto;
    @apply shadow-lg rounded-lg;
  }
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
</style>