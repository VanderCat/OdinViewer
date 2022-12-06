<script setup>
import { ref, onMounted } from "vue"
import { useRouter, useRoute, routerKey } from 'vue-router'
import Video from '../components/video.vue';
import Button from "../components/button.vue";
const router = useRouter()
const route = useRoute()

const cdn = "https://video-cdn.odin.study/"
function getLink(id) {
    return cdn+route.query.uuid+"/"+route.query.uuid+"-stream"+id+".mp4"//+"media_"+id+".m3u8"//
}
const options = {
    controls: true,
    sources: [
        {
            src: getLink(1),
            type: 'application/x-mpegURL',
            label: '4K',
        },
        {
            src: getLink(2),
            type: 'application/x-mpegURL',
            label: '1080',
        },
        {
            src: getLink(3),
            type: 'application/x-mpegURL',
            label: '720P',
        },
        {
            src: getLink(3),
            type: 'application/x-mpegURL',
            label: '480P',
        },
        {
            src: getLink(4),
            type: 'application/x-mpegURL',
            label: '360P',
        },
        {
            src: getLink(5),
            type: 'application/x-mpegURL',
            label: '240P',
        },
    ]
}
const video = ref()
function setQuality(quality) {
    router.replace({path:route.fullPath, query:{uuid:route.query.uuid, quality:quality}})
}

/*onBeforeMounted(()=>{
    console.log(route.query.uuid)
    if (route.query.uuid == undefined) {
        router.replace("/")
    }
    if (route.query.quality==undefined){
        setQuality(1)
    }
})*/
</script>

<template>
    <div class="w-7/12 lg:w-1/2 xl:w-5/12 2xl:w-4-12 min-w-min flex flex-col gap-6 shadow-md p-8 rounded-md py-4">
        <div>
            <h1 class="font-bold text-neutral-600">Почти настоящее качество</h1>
            <div class="flex flex-row">
                <div v-for="(source, i) in options.sources">
                    <Button :disabled='(i==route.query.quality)' @click="setQuality(i)">{{source.label}}</Button>
                </div>
            </div>
        </div>
        <Video ref="video" :audioSrc="getLink(0)" :videoSrc="options.sources[route.query.quality].src" :key="options.sources[route.query.quality].src"/>
    </div>
</template>