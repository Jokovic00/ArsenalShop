<template>
  <div class="checkout-page">
    <h1>Checkout</h1>

    <form @submit.prevent="submitOrder" class="form">
      <input v-model="name" placeholder="Full Name" required />
      <input v-model="card" placeholder="Card Number" required maxlength="19" />
      <input v-model="address" placeholder="Shipping Address" required />

      <BaseButton type="submit">Place Order</BaseButton>
    </form>

    <p v-if="success" class="success">Order placed successfully ✅</p>
  </div>
</template>

<script>
import BaseButton from '../components/base/BaseButton.vue'
import { useCartStore } from '../stores/cartStore'

export default {
  components: { BaseButton },
  data() {
    return {
      name: '',
      card: '',
      address: '',
      success: false
    }
  },
  methods: {
    submitOrder() {
      const store = useCartStore()
      store.clearCart()
      this.success = true
      this.name = this.card = this.address = ''
    }
  }
}
</script>

<style scoped>
.checkout-page {
  max-width: 400px;
  margin: auto;
  padding: 40px;
}

.form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 15px;
}

.success {
  color: green;
  margin-top: 15px;
  font-weight: bold;
}
</style>
