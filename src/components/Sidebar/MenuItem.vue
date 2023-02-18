<script setup lang="ts">

interface Props {
  to?: string;
}

defineProps<Props>();
</script>

<template>
  <router-link v-if="to" class="menu-item" :to="to">
    <slot/>
  </router-link>
  <a v-else class="menu-item">
    <slot />
  </a>
</template>
<style lang="postcss" scoped>
.menu-item {
  cursor: pointer;
  @apply px-4 py-4;
  @apply block;
  @apply border-l-4 border-[#EDEFF6];

  @apply hover:bg-white;
  @apply hover:border-[#4E5FA5];
  @apply text-[#4E5FA5];
  @apply font-bold;
}

.router-link-active {
  @apply bg-white;
  @apply border-[#4E5FA5];
}
</style>