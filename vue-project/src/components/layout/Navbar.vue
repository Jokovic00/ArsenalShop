<template>
  <nav class="navbar">
    <h2>Arsenal FC Shop</h2>
    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/shop">Shop</RouterLink>
      <RouterLink to="/cart">Cart ({{ totalItems }})</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>
</template>

<script>
import { useCartStore } from '../../stores/cartStore'

export default {
  computed: {
    totalItems() {
      const store = useCartStore()
      return store.totalItems
    }
  }
}
</script>

<style scoped>
.navbar {
  background: #db0007;
  color: white;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links a {
  margin-left: 15px;
  color: white;
  text-decoration: none;
}
.links a.router-link-active {
  text-decoration: underline;
}
</style>
