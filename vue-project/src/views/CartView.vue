<template>
  <div class="cart-page">
    <h1>Your Cart</h1>

    <p v-if="cart.length === 0">Cart is empty</p>

    <div v-for="item in cart" :key="item.id" class="cart-item">
      <img :src="item.image" class="product-img" />

      <div class="info">
        <h3>{{ item.name }}</h3>
        <p class="price">{{ item.price }} €</p>

        <div class="qty-row">
          <div class="qty-box">
            <button class="qty-btn" @click="decrease(item.id)">−</button>
            <span class="qty">{{ item.quantity }}</span>
            <button class="qty-btn" @click="increase(item.id)">+</button>
          </div>

          <button class="remove-btn" @click="remove(item.id)">Remove</button>
        </div>
      </div>
    </div>

    <div v-if="cart.length" class="total-box">
      <h2>Total: {{ totalPrice }} €</h2>

      <RouterLink to="/checkout">
        <button class="checkout-btn">Order Now</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'

export default {
  computed: {
    cart() {
      return useCartStore().cart
    },
    totalPrice() {
      return useCartStore().totalPrice
    }
  },
  methods: {
    increase(id) {
      useCartStore().increaseQuantity(id)
    },
    decrease(id) {
      useCartStore().decreaseQuantity(id)
    },
    remove(id) {
      useCartStore().removeFromCart(id)
    }
  }
}
</script>

<style scoped>
.cart-page {
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 25px;
  background: #fff;
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.product-img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 10px;
  background: #f5f5f5;
  padding: 10px;
}

.info {
  flex: 1;
}

.price {
  font-weight: bold;
  margin: 6px 0 12px;
}

.qty-row {
  display: flex;
  align-items: center;
  gap: 15px;
}

.qty-box {
  display: flex;
  align-items: center;
  background: #f2f2f2;
  border-radius: 8px;
  overflow: hidden;
}

.qty-btn {
  background: white;
  border: none;
  width: 34px;
  height: 34px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;
}

.qty-btn:hover {
  background: #ddd;
}

.qty {
  width: 40px;
  text-align: center;
  font-weight: bold;
}

.remove-btn {
  background: #db0007;
  color: white;
  border: none;
  padding: 7px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.remove-btn:hover {
  background: #b30006;
}

.total-box {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkout-btn {
  background: linear-gradient(135deg, #db0007, #a80005);
  color: white;
  border: none;
  padding: 12px 26px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.25s;
  box-shadow: 0 6px 14px rgba(219, 0, 7, 0.3);
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(219, 0, 7, 0.4);
}
</style>
