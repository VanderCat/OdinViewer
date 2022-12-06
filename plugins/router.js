import * as VueRouter from 'vue-router'

import main from "../src/routes/main.vue"
import play from "../src/routes/play.vue"

export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', component: main},
        { path: '/play', component: play},
    ]
})
