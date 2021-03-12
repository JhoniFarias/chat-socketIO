import Login from './components/Login.vue'
import Chat from './components/Chat.vue'


export const routes = [
    { path: '', component: Login, title: 'login' },
    { path: '/chat', component: Chat, title: 'chat' },
];