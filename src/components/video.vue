<script setup>
import { ref, onMounted } from "vue"
import slider from "./slider.vue";
const video = ref()
const audio = ref()
const volume = ref(100)
onMounted(()=>{
    video.value.addEventListener("playing", (event)=>{
        audio.value.currentTime = video.value.currentTime
        audio.value.play();
    })
    video.value.addEventListener("pause", ()=>{
        audio.value.pause();
    })
})
defineProps({
    audioSrc: String,
    videoSrc: String
})
</script>
<template>
    <div>
        <video ref="video" controls muted autoplay crossorigin="">
            <source :src="videoSrc" type="video/mp4" />
            <audio ref="audio" controls preload="">
                <source :src="audioSrc" type="audio/mp4" crossorigin=""/>
            </audio>
        </video>
        <slider max=100 min=0 step=1 label="Громкость" v-model="volume" @input="(audio.volume=volume/100)"/>
    </div>
</template>