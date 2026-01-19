<template>
  <div>
    <h1>Shop</h1>
    <ProductList :products="products" @add="addToCart" />
  </div>
</template>

<script>
import { products } from '../assets/products'
import ProductList from '../components/shop/ProductList.vue'
import { useCartStore } from '../stores/cartStore'

export default {
  components: { ProductList },
  data() {
    return {
      products
    }
  },
  methods: {
    addToCart(product) {
      const store = useCartStore()
      store.addToCart(product)
    }
  }
}
</script>
