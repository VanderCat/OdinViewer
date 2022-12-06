<template>
    <button class="uppercase tracking-wider text-purple-400 enabled:hover:bg-purple-400 enabled:hover:bg-opacity-5 p-2 px-3 rounded disabled:text-opacity-25" :disabled="disabled">
        <slot>Button</slot>
    </button>
</template>

<script setup>
defineProps({
    disabled: Boolean
})
</script>