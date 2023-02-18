<script setup lang="ts">
import Sidebar from "./components/Sidebar/Sidebar.vue";

</script>



<template>
  <Sidebar />
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style lang="postcss">
#app {
  display: grid;
  grid-template-columns: min-content 1fr;
  height: 100%;
}

.content {
  margin-top: 64px;
  @apply mx-[32px] md:mx-[64px];
}
</style>
