<script setup>
import { ref, computed } from "vue"
import { useRouter, useRoute } from 'vue-router'
import textInput from '../components/textInput.vue';
import Button from "../components/button.vue";
import Snackbar from 'awesome-snackbar'

const router = useRouter()
const route = useRoute()

const uuid = ref("")
const uuidRegexp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
const invalidUuid = computed(()=>{
    return !uuidRegexp.test(uuid.value)
})

async function copy() {
    navigator.clipboard.writeText(window.location.origin+"#/play?uuid="+uuid.value+"&quality=1")
    new Snackbar("✔ Скопированно в буфер обмена!", {
            position: "bottom-center",
        })
}

function open() {
    router.push({path:"/play",query:{uuid:uuid.value, quality:1}})
}

</script>

<template>
    <div class="w-7/12 lg:w-1/2 xl:w-5/12 2xl:w-4-12 min-w-min flex flex-col gap-6 shadow-md p-8 rounded-md pb-4">
        <h1 class="font-bold text-center text-2xl">Odin Video Viewer</h1>
        <div class="flex flex-col flex-1 gap-4">
            <div class="flex-1">
                <textInput v-model="uuid" placeholder="69ead7c3-53d6-47dc-938e-7fb20dc650fe">UUID Видео:</textInput>
            </div>
            <div class="flex gap-4 justify-around sm:justify-end">
                <Button @click="copy" :disabled="invalidUuid">Скопировать</Button>
                <Button @click="open" :disabled="invalidUuid">Открыть</Button>
            </div>
        </div>
    </div>
</template>