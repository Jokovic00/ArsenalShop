<template>
  <div class="card">
    <img :src="product.image" alt="" />
    <h3>{{ product.name }}</h3>

    <p class="price">{{ product.price }} €</p>

    <div class="actions">
      <BaseButton @click="$emit('add', product)">Add to cart</BaseButton>
      <RouterLink :to="`/product/${product.id}`">
        <BaseButton class="secondary">Details</BaseButton>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'

export default {
  components: { BaseButton },
  props: {
    product: Object
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 14px;
  width: 230px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}
.card img {
  width: 100%;
  height: 160px;
  object-fit: contain;
}

/* ⭐ PRICE */
.price {
  font-size: 1.6rem;
  font-weight: 700;
  color: #db0007;
  letter-spacing: 0.5px;
  margin: 6px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.secondary {
  background: #111;
}
.secondary:hover {
  background: #333;
}
</style>
