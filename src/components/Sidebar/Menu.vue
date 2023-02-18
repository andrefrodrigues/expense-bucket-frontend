<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import { HomeIcon, UserAddIcon, LoginIcon, LogoutIcon  } from '@heroicons/vue/outline';
import { useUserStore } from '../../stores/user';
import { useAuthStore } from '../../stores/auth';
import { storeToRefs } from 'pinia';

type MenuProps = {
  open: boolean;
}
const userStore = useUserStore();
const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(userStore);
const { open = true } = defineProps<MenuProps>();

const emit = defineEmits(['route-selected']);

const selectRoute = (path: string) => {
  emit('route-selected', path);
}

const onLogout = () => {
  authStore.logout();
  emit('route-selected', '/');
};

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
      <MenuItem v-if="!isLoggedIn" to="/signup" @click="selectRoute('/signup')">
        <span class="menu-item-content" >
          <UserAddIcon class="menu-icon"/>
          <span class="menu-label" v-if="open">Signup</span>
        </span>
      </MenuItem>
      <MenuItem v-if="!isLoggedIn" to="/login" @click="selectRoute('/login')">
        <span class="menu-item-content" >
          <LoginIcon class="menu-icon"/>
          <span class="menu-label" v-if="open">Login</span>
        </span>
      </MenuItem>
      <MenuItem v-if="isLoggedIn" @click="onLogout">
        <span class="menu-item-content" >
          <LogoutIcon class="menu-icon"/>
          <span class="menu-label" v-if="open">Logout</span>
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
