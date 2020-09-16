// Imports
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    // 이미로그인된 유저
    alert('이미 로그인을 하였습니다.')
    next('/super')
  } else {
    next()
  }
}
const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    // 아직 로그인 안 된 유저니까 막아야
    // 기다렸다 한번더 확인후 보냄
    setTimeout(() => {
      if (store.state.isLogin === false) {
        alert('로그인이 필요한 기능입니다.')
        next('/super/login')
      }
    }, 1000)
  } else {
    next()
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/web',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: 'contact-us',
          name: 'Contact',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'shop',
          name: 'Shop',
          component: () => import('@/views/shop/Index.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },
    {
      path: '/super',
      component: () => import('@/layouts/super/Index.vue'),
      children: [
        {
          path: '',
          name: 'Main',
          beforeEnter: onlyAuthUser,
          component: () => import('@/views/super/main/Index.vue'),
        },
        {
          path: 'itemManager',
          name: 'ItemManager',
          beforeEnter: onlyAuthUser,
          component: () => import('@/views/super/itemManager/Index.vue'),
        },
        {
          path: 'login',
          name: 'Login',
          beforeEnter: rejectAuthUser,
          component: () => import('@/views/super/login/Index.vue'),
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },
  ],
})

export default router
