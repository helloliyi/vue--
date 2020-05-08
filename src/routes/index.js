import Home from '@/pages/home/home.vue'
import Cart from '@/pages/cart/cart.vue'
import Deserve from '@/pages/deserve/deserve.vue'
import Classify from '@/pages/classify/classify.vue'
import Personal from '@/pages/personal/personal.vue'

export default [
  {path:'/Home',component:Home},
  {path:'/Cart',component:Cart},
  {path:'/Deserve',component:Deserve},
  {path:'/Classify',component:Classify},
  {path:'/Personal',component:Personal},
  { path: '/', redirect: '/Home' }
]
