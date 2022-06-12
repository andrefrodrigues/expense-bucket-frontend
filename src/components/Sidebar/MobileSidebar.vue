<script setup lang="ts">
import { ref } from "vue";
import { MenuIcon } from "@heroicons/vue/solid";
import Menu from "./Menu.vue";
import Logo from "./Logo.vue";

const open = ref(false);

const toggle = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="relative h-full">
    <MenuIcon class="menu-button" @click="toggle" />
    <div class="drawer" :class="{ 'drawer-open': open }">
      <MenuIcon class="menu-button" @click="toggle" />
      <Logo />
      <Menu />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.menu-button {
  @apply h-8 w-8 absolute top-5 left-5;
  @apply text-[#4E5FA5];
}
.drawer {
  @apply w-[250px];
  @apply left-[-250px];
  @apply shadow-lg;
  @apply pl-6;
  @apply pt-20;
  @apply h-full;
  @apply fixed;
  @apply z-10;
  @apply bg-white;
  @apply transition;
  @apply duration-300;
  @apply bg-[#EDEFF6];
}
.drawer-open {
  @apply translate-x-[250px];
}
</style>
