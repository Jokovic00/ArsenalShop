<template>
  <div class="list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add="$emit('add', $event)"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: { ProductCard },
  props: {
    products: Array
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
