<script setup lang="ts">
import { PropType, defineProps } from "vue";
import { CashIcon } from "@heroicons/vue/outline";

defineProps({
  hideText: {
    type: Boolean as PropType<boolean>,
    default: () => false,
  }
})

</script>

<template>
  <h1 class="logo">
    <CashIcon class="logo-icon" />
    <span v-if="!hideText">
      Expense Bucket
    </span>
  </h1>
</template>

<style lang="postcss" scoped>
.logo {
  @apply text-lg font-bold;
  @apply flex items-center;
  @apply text-[#4E5FA5];
}

.logo-icon {
  @apply w-[50px] h-[50px] mr-1;
}
</style>
