<script lang="ts">
import { defineComponent, ref } from "vue";
import Menu from "./Menu.vue";
import { MenuIcon } from "@heroicons/vue/solid";
import Logo from "./Logo.vue";
export default defineComponent({
  components: {
    Menu,
    MenuIcon,
    Logo,
  },
  setup() {
    const open = ref(true);
    const toggle = () => {
      open.value = !open.value;
    };
    return {
      toggle,
      open,
    };
  },
});
</script>

<template>
  <div class="sidebar" :class="{ 'sidebar-shrunk': !open }" @dblclick="toggle">
    <Logo :hide-text="!open"/>
    <Menu />
    <div
      class=""
      :class="{ 'icon-container-shrunk': !open, 'icon-container': open }"
    >
      <MenuIcon @click="toggle" class="menu-button" />
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.sidebar {
  @apply w-[250px] shadow-lg px-4 py-10 h-full;
  @apply bg-[#EDEFF6];
  @apply flex flex-col justify-between;
  @apply transition-all;
  @apply duration-300;
}

.sidebar-shrunk {
  @apply w-[72px];
}

.icon-container {
  @apply flex justify-end;
}

.icon-container-shrunk {
  @apply flex justify-center;
}

.menu-button {
  @apply h-8 w-8;
  @apply text-[#4E5FA5];
  @apply cursor-pointer;
}
</style>
