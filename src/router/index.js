import Vue from 'vue'
import Router from 'vue-router'
const myHome=()=>import('views/home/Home.vue');
const mydetails=()=>import('views/catagory/catagory.vue');
const myshopcar=()=>import('views/cart/shopcar.vue');
const myprime=()=>import('views/profile/prime.vue');



Vue.use(Router)
const routes=[
  {
    path:"",
    redirect:'/home'
  },
  {
    path:'/home',
    component:myHome

  },
  {
    path:'/catagory',
    component:mydetails
  },
  {
    path:'/shopcar',
    component:myshopcar
  },
  {
    path:'/prime',
    component:myprime
  },
]
export default new Router({
  routes,
  mode:'history'
})

