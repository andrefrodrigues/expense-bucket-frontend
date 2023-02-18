<script lang="ts" setup>

type Props = {
  disabled?: boolean;
}
const emit = defineEmits(['click']);
const { disabled } = defineProps<Props>();

</script>
<template>
  <button :disabled="disabled">
    <slot />
  </button>
</template>


<style lang="postcss" scoped>
  button {
    @apply text-base;
    @apply p-3;
    @apply bg-[#4E5FA5];
    @apply text-white;
    @apply rounded-lg;

    @apply hover:bg-[#7180BD];
  }

  button:active:enabled {
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.3);
    @apply hover:bg-[#4E5FA5];
  }

  button:disabled {
    @apply bg-[#EDEFF6];
    @apply text-[#B5BDDD];
  }
</style>