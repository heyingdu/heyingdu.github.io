import { createRouter, createWebHashHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import Writer from '../views/Writer.vue'
import Post from '../views/Post.vue';
const routes = [
    { path: '/', name: 'Home', component: Projects },
    { path: '/writer/:id', name: 'Writer', component: Writer },
    { path: '/posts/:id', name: 'Post', component: Post }
]

export const router = createRouter({
    history: createWebHashHistory (),
    routes
})