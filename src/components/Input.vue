<script lang="ts" setup>

type Props = {
  name: string;
  type?: string;
  placeholder: string;
  modelValue: string;
  error?: boolean;
}


const emit = defineEmits(['update:modelValue']);
const { type = 'text', placeholder, modelValue, error = false } = defineProps<Props>();

</script>
<template>
  <input  :name="name" :placeholder="placeholder" :type="type" :value="modelValue"
         @input="emit('update:modelValue', $event.target.value)" :class="{'error': error}"/>
</template>


<style lang="postcss" scoped>
input {
  @apply w-full;
  @apply p-2;
  @apply border border-[#C6C6C6];
  @apply rounded-md;
  @apply focus:border-[#4E5FA5];
  @apply outline-0;
}

.error {
  @apply border border-red-600;
}
</style>