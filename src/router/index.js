import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Home from '../pages/musics/Music'
import Home from '../pages/Home'
import Video from '../pages/Video'
import Mine from '../pages/Mine'
import Login from '../pages/Login'
import Friend from '../pages/Friend'
import Register from '../pages/Register'
import Error from '../pages/Error'




const routes = [
    {
      path: '/',
      redirect: 'home' 
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/video',
      component: Video
    },
    {
      path: '/mine',
      component: Mine,  
    },
    {
        path: '/friend',
        component: Friend,  
      },
      {
        path: '/login',
        component: Login,
        name: 'login'
      },
      {
        path: '/register',
        component: Register,
      },

    {
      path: '/error',
      component: Error,
    },
    {
      path: '*',
      redirect: '/error' 
    }
  ]


  const router = new VueRouter({
    routes, 
    mode: 'history' 
  })
  
  
  export default router