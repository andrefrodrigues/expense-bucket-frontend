<script lang="ts" setup>
import {reactive} from "vue";
import Input from '/src/components/Input.vue';
import Button from '/src/components/Button.vue';

import useValidate from '@vuelidate/core';
import {required, email, sameAs, maxLength, minLength} from '@vuelidate/validators';

type FormFields = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
const state = reactive<FormFields>({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: ''
});

const rules = {
  name: {required, maxLength: maxLength(32)},
  email: {email, required, maxLength: maxLength(32)},
  password: {required, minLength: minLength(16)},
  passwordConfirmation: {required, sameAsPassword: sameAs('password'), minLength: minLength(16)}
}

const v$ = useValidate(rules, state);

</script>
<template>
  <form class="signup-form">
    <div class="input-container">
      <Input v-model="state.name" name="name" placeholder="Name"/>
    </div>
    <div class="input-container">
      <Input type="email" v-model="state.email" name="email" placeholder="Email address"/>
    </div>
    <div class="input-container">
      <Input type="password" v-model="state.password" name="password" placeholder="Password"/>
    </div>
    <div class="input-container">
      <Input type="password" v-model="state.passwordConfirmation" placeholder="Confirm your password"/>
    </div>
    <Button>
      Create new account
    </Button>
  </form>
</template>


<style lang="postcss" scoped>
.signup-form {
  @apply mt-4;
}

.input-container {
  @apply mt-6;
}
</style>