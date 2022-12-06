<template>
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <span class="align-middle inline-block"><slot>Label:</slot></span>
        <input 
            type="text"
            :placeholder="placeholder"
            class="p-1 px-4 flex-grow placeholder:text-neutral-600 bg-neutral-800 rounded border-b-2 border-neutral-700 focus:border-purple-400 focus:outline-0"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script setup>
defineProps({
    modelValue: String,
    placeholder: String
})
defineEmits(['update:modelValue'])
</script>