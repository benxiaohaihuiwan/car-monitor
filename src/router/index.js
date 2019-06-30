import Vue from 'vue'
import Router from 'vue-router'
import Login from '../component/Login/userLogin.vue'
import AlarmShow from '../component/Alarm/alarm-show.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/AlarmShow',
            name: 'AlarmShow',
            component: AlarmShow
        }
    ]
})