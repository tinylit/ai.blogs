import Vue from 'vue'
import VueRouter from 'vue-router'
import { Header, Main, Footer, Menu, MenuItem, Submenu, Button, Link } from 'element-ui'
import routers from './routers'
import App from './app.vue'

Vue.use(VueRouter);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Button);
Vue.use(Link);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routers
})

new Vue({
    el: '#app',
    router,
    render: c => c(App)
});