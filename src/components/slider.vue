<script setup>
defineProps({
    min: String,
    max: String,
    step: String,
    label: String,
    modelValue: String
})

</script>
<template>
    <div class="flex flex-row items-center">
        <div class="pr-4">{{label}}</div>
        <input type="range" :min="min" :max="max" :step="step" class="slider w-full h-1" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :style="{'--slider-value':(100-((modelValue-min)/max)*100)+'%'}"
        />
    </div>
</template>

<style scoped>
.slider {
    -webkit-appearance: none;
}

.slider:focus {
    outline: none;
}

.slider::-webkit-slider-runnable-track, .slider::-moz-range-track {
    @apply bg-purple-400;
    height: 5px;
    background-image: linear-gradient(#646464, #646464);
    background-size: var(--slider-value) 100%;
    background-position: 100%;
    background-repeat: no-repeat;
}
.slider::-webkit-slider-thumb, .slider::-moz-range-thumb {
    -webkit-appearance: none;
    outline: none;
    border: 0;
    height: 16px;
    width: 16px;
    @apply bg-purple-400;
    margin-top: -5px;
    border-radius: 50%;
}
</style>