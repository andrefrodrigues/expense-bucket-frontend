<script lang="ts" setup>
type Props = {
    to?: string;
}

const { to } = defineProps<Props>()
</script>
<template>
    <router-link class="link" :to="to">
        <slot />
    </router-link>
</template>
<style lang="postcss" scoped>
    .link {
        @apply text-[#4E5FA5];
        @apply font-[600];
        @apply hover:text-[#7180BD];
    }

    .link:active:enabled {
        @apply text-[#4E5FA5];
        @apply hover:text-[#4E5FA5];
    }
</style>