<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" class="img" />
    <p>{{ product.description }}</p>
    <p><strong>{{ product.price }} €</strong></p>
    <BaseButton @click="addToCart">Add to cart</BaseButton>
  </div>
</template>

<script>
import { products } from '../assets/products'
import BaseButton from '../components/base/BaseButton.vue'
import { useCartStore } from '../stores/cartStore'

export default {
  components: { BaseButton },
  props: ['id'],
  data() {
    return {
      product: null
    }
  },
  created() {
    this.product = products.find(p => p.id === Number(this.$route.params.id))
  },
  methods: {
    addToCart() {
      const store = useCartStore()
      store.addToCart(this.product)
    }
  }
}
</script>

<style scoped>
.img {
  width: 250px;
}
</style>
