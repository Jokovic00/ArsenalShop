import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/shop', component: ShopView },
  { path: '/product/:id', component: ProductDetailView, props: true },
  { path: '/cart', component: CartView },
  { path: '/checkout', component: CheckoutView },
  { path: '/about', component: AboutView }
]

export default createRouter({
  history: createWebHistory('/arsenal-shop/'),
  routes
})
