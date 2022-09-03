<script lang="ts" setup>
import {reactive, computed} from "vue";

import Input from '/src/components/Input.vue';
import Button from '/src/components/Button.vue';

import useValidate, { ValidationRuleCollection} from '@vuelidate/core';
import {required, email, sameAs, maxLength, minLength} from '@vuelidate/validators';

type FormProps = {
  loading?: boolean;
}
const { loading = false } = defineProps<FormProps>();

const emit = defineEmits(['submit']);

export type FormFields = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

type FormRules = {
  name: ValidationRuleCollection;
  email: ValidationRuleCollection;
  password: ValidationRuleCollection;
  passwordConfirmation: ValidationRuleCollection;
}
const state = reactive<FormFields>({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: ''
});

const rules = computed(()=> ({
  name: {required, maxLength: maxLength(32)},
  email: {email, required, maxLength: maxLength(32)},
  password: {required, minLength: minLength(8)},
  passwordConfirmation: { required, sameAsPassword: sameAs(state.password), minLength: minLength(8) }
}));

const v$ = useValidate<FormFields, FormRules>(rules, state);

const onSubmit = async ()=> {
  //@ts-ignore
  const isValid = await v$.value.$validate();
  if(!isValid) {
    return;
  }
  emit('submit', state);
};

</script>
<template>
  <form class="signup-form" @submit.prevent="onSubmit">
    <div class="input-container">
      <Input v-model="state.name" name="name" placeholder="Name"/>
      <div class="errors" v-for="error of v$.name.$errors" :key="error.$uid">
          <div class="error-message">{{error.$message}}</div>
      </div>
    </div>
    <div class="input-container">
      <Input type="email" v-model="state.email" name="email" placeholder="Email address"/>
      <div class="errors" v-for="error of v$.email.$errors" :key="error.$uid">
        <div class="error-message">{{error.$message}}</div>
      </div>
    </div>
    <div class="input-container">
      <Input type="password" v-model="state.password" name="password" placeholder="Password"/>
      <div class="errors" v-for="error of v$.password.$errors" :key="error.$uid">
        <div class="error-message">{{error.$message}}</div>
      </div>
    </div>
    <div class="input-container">
      <Input type="password" name="passwordConfirmation" v-model="state.passwordConfirmation" placeholder="Confirm your password"/>
      <div class="errors" v-for="error of v$.passwordConfirmation.$errors" :key="error.$uid">
        <div class="error-message">{{error.$message}}</div>
      </div>
    </div>
    <div class="submit-wrapper">
      <Button>
        Create new account
      </Button>
    </div>
  </form>
</template>


<style lang="postcss" scoped>
.signup-form {
  @apply mt-4;
}
.input-container {
  @apply mx-auto;
  @apply max-w-[320px];
  @apply mt-6;
}
.submit-wrapper {
  @apply mt-6;
  @apply text-center;
}

.error-message {
  @apply mt-2;
  @apply text-sm;
  @apply text-red-600;
}
</style>