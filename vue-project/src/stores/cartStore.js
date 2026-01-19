import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  getters: {
    totalPrice(state) {
      return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    totalItems(state) {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0)
    }
  },
  actions: {
    loadCart() {
      const saved = localStorage.getItem('cart')
      if (saved) {
        this.cart = JSON.parse(saved)
      }
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    addToCart(product) {
      const existing = this.cart.find(p => p.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },
    increaseQuantity(id) {
      const item = this.cart.find(p => p.id === id)
      if (item) {
        item.quantity++
        this.saveCart()
      }
    },
    decreaseQuantity(id) {
      const item = this.cart.find(p => p.id === id)
      if (item && item.quantity > 1) {
        item.quantity--
      } else {
        this.removeFromCart(id)
        return
      }
      this.saveCart()
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(p => p.id !== id)
      this.saveCart()
    },
    clearCart() {
      this.cart = []
      this.saveCart()
    }
  }
})
