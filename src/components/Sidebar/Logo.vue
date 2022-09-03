<script setup lang="ts">
import { defineProps } from "vue";
import { CashIcon } from "@heroicons/vue/outline";
type Props = {
  hideText?: boolean;
}
const { hideText = false } = defineProps<Props>();

</script>

<template>
  <h1 class="logo">
    <CashIcon class="logo-icon" />
    <span v-if="!hideText" class="app-name">
      Expense Bucket
    </span>
  </h1>
</template>

<style lang="postcss" scoped>
.logo {
  @apply px-4 pt-10;
  @apply text-lg font-bold;
  @apply flex items-center;
  @apply text-[#4E5FA5];
}

.logo-icon {
  @apply w-[50px] h-[50px];
}

.app-name {
  @apply ml-2;
}
</style>
