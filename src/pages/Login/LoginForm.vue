<script setup lang="ts">
import { reactive, computed } from 'vue'
import useValidate, { ValidationRuleCollection} from '@vuelidate/core';
import {required, email, maxLength, minLength} from '@vuelidate/validators';
import Input from '../../components/Input.vue';
import Button from '../../components/Button.vue';
import { FormFields } from './types';
import Spinner from '../../components/Spinner.vue';
type FormProps = {
  loading?: boolean;
}

type FormRules = {
  email: ValidationRuleCollection;
  password: ValidationRuleCollection;
}
const { loading = false } = defineProps<FormProps>();
const emit = defineEmits(['submit']);

const state = reactive<FormFields>({
  email: '',
  password: '',
});

const rules = computed<FormRules>(()=> ({
  email: { email, required, maxLength: maxLength(32) },
  password: { required, minLength: minLength(8) },
}));
const v$ = useValidate<FormFields, FormRules>(rules, state);

const disabledSubmitButton = computed(()=> loading || v$.value.$error);

const onSubmit = async () => {
    const isValid = await v$.value.$validate();
    if(!isValid) {
    return;
  }
  emit('submit', state);
};
</script>
<template>
    <form class="login-form" @submit.prevent="onSubmit">
        <div class="input-container">
      <Input type="email" v-model="state.email" name="email" placeholder="Email address" :error="v$.email.$error"/>
      <div class="errors" v-for="error of v$.email.$errors" :key="error.$uid">
        <div class="error-message">{{error.$message}}</div>
      </div>
    </div>
    <div class="input-container">
      <Input type="password" v-model="state.password" name="password" placeholder="Password" :error="v$.password.$error"/>
      <div class="errors" v-for="error of v$.password.$errors" :key="error.$uid">
        <div class="error-message">{{error.$message}}</div>
      </div>
    </div>
    <div class="submit-wrapper">
      <Button :disabled="disabledSubmitButton">
        <span v-if="!loading">Login</span>
        <Spinner v-if="loading" />
      </Button>
    </div>
    </form>
</template>
<style lang="postcss" scoped>
.input-container {
  @apply mx-auto;
  @apply max-w-[320px];
  @apply mt-6;
}
.error-message {
  @apply mt-2;
  @apply text-sm;
  @apply text-red-600;
}
.submit-wrapper {
  @apply mt-6;
  @apply text-center;
}
</style>