<script lang="ts" setup>

type Props = {
  name: string;
  type: string;
  placeholder: string;
  modelValue: string;
}
type Emits = {
  (eventName: 'update', modelValue: string): void;
}

const emit = defineEmits<Emits>();
const {type = 'text'} = defineProps<Props>();

</script>
<template>
  <input :name="name" :placeholder="placeholder" :type="type" :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"/>
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
</style>