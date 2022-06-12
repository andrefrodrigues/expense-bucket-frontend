<script setup lang="ts">
import Sidebar from "./components/Sidebar/Sidebar.vue";

</script>



<template>
  <Sidebar />
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  display: grid;
  grid-template-columns: min-content 1fr;
  height: 100%;
}

.content {
  margin-top: 128px;
  margin-left: 64px;
  margin-right: 64px;
}
</style>
