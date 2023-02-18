<script lang="ts" scoped>

</script>
<template>
    <section>
        <div class="card">
            <slot />
        </div>
    </section>
</template>
<style lang="postcss" scoped>
  .card {
    @apply p-10 max-w-[450px];
    @apply mx-auto;
    @apply shadow-lg rounded-lg;
  }
</style>