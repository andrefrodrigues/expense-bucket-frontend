<script setup lang="ts">
import SignupForm from './SignupForm.vue';

</script>

<template>
  <div class="signup-card">
    <h1 class="title">Sign up</h1>
    <p class="description">Create a new account</p>

    <SignupForm />
  </div>
</template>
<style lang="postcss" scoped>
  .signup-card {
    @apply p-10 max-w-[750px];
    @apply mx-auto;
    @apply shadow-lg rounded-lg;
  }
  .title {
    @apply text-[#4E5FA5];
    @apply text-3xl;
    @apply font-bold;
  }
  .description {
    @apply text-xl;
    @apply mt-2;
  }
</style>