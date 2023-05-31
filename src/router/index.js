import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView'
import ProductDetail from "@/views/ProductDetail";
import BasketView from "@/views/BasketView";
import CategoryView from "@/views/CategoryView";
import SearchView from "@/views/SearchView";
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import ProfileView from '../views/ProfileView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import SuccessView from '@/views/SuccessView'
import HelpView from '@/views/HelpView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutComponent')
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/:category_slug/:product_slug',
    name: 'Product',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: BasketView
  },
  {
    path: '/:category_slug',
    name: 'Category',
    component: CategoryView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/cart/checkout',
    name: 'Checkout',
    component: CheckoutView,
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/cart/success',
    name: 'Success',
    component: SuccessView
  },
  {
    path: '/help',
    name: 'Help',
    component: HelpView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogIn', query: { to: to.path } });
  } else {
    next()
  }
})
export default router
