<script lang="ts">
import { defineComponent } from "vue";
import DesktopSidebar from './DesktopSidebar.vue';
import MobileSidebar from './MobileSidebar.vue';

export default defineComponent({
  components: {
    DesktopSidebar,
    MobileSidebar
  },
  setup() {},
});
</script>

<template>
    <div class="hidden md:block">
      <DesktopSidebar />
    </div>
    <div class="md:hidden">
      <MobileSidebar />
    </div>
</template>
