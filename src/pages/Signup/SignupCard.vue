<script setup lang="ts">
import SignupForm, { FormFields } from './SignupForm.vue';


const onSubmit = (data: FormFields) => {
    console.warn('not yet implemented');
    console.log(data);
};
</script>

<template>
  <div class="signup-card">
    <h1 class="title">Sign up</h1>
    <p class="description">Create a new account</p>
    <SignupForm @submit="onSubmit"/>
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
</style>