<script setup lang="ts">
import DesktopSidebar from './DesktopSidebar.vue';
import MobileSidebar from './MobileSidebar.vue';

</script>

<template>
    <div class="hidden md:block">
      <DesktopSidebar />
    </div>
    <div class="md:hidden">
      <MobileSidebar />
    </div>
</template>
