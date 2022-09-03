<script lang="ts" setup>


const emit = defineEmits(['click']);

</script>
<template>
  <button>
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
</style>