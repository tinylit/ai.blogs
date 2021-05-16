import Index from './views/index.vue'

export default [
    {
        path: "/",
        name: "index",
        component: Index,
        meta: {
            title: "首页",
            keepAlive: true
        }
    },
    {
        path: '/SayHi',
        name: 'SayHi',
        component: () => import('./views/SayHi.vue'),
        meta: {
            title: "测试",
            keepAlive: true
        }
    }
]