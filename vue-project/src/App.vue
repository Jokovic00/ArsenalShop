<template>
  <Navbar />
  <main class="container">
    <RouterView />
  </main>
  <Footer />
</template>

<script>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.container {
  padding: 20px;
}
</style>
