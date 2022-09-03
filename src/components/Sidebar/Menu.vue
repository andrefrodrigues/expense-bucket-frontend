<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import {HomeIcon, LoginIcon} from '@heroicons/vue/outline';

type MenuProps = {
  open: boolean;
}

const { open = true } = defineProps<MenuProps>();

const emit = defineEmits(['route-selected']);

const selectRoute = (path: string) => {
  emit('route-selected', path);
}
</script>


<template>
  <div class="menu">
    <div class="main-menu">
      <MenuItem to="/"  @click="selectRoute('/')">
        <span class="menu-item-content">
        <HomeIcon class="menu-icon" />
          <span class="menu-label" v-if="open">Home</span>
      </span>
      </MenuItem>
    </div>
    <div class="auth-menu">
      <MenuItem to="/signup" @click="selectRoute('/signup')">
        <span class="menu-item-content" >
          <LoginIcon class="menu-icon"/>
          <span class="menu-label" v-if="open">Signup</span>
        </span>
      </MenuItem>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.menu {
  @apply flex flex-col justify-between;
  @apply flex-1;
  @apply mt-5;
}

.menu-icon {
  @apply h-[32px] w-[32px];
}

.menu-label {
  @apply ml-2;
}

.menu-item-content {
  @apply flex items-center justify-start;
}
</style>
