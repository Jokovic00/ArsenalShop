<template>
  <div class="home">

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-text">
        <h1>Official Arsenal FC Fan Shop</h1>
        <p>
          Welcome to the ultimate destination for every Gunner fan.
          Discover official jerseys, training gear and accessories from Arsenal FC.
        </p>
        <RouterLink to="/shop">
          <BaseButton>Shop Now</BaseButton>
        </RouterLink>
      </div>
      <img src="/src/assets/obrazke/hero.png" alt="Arsenal" class="hero-img" />
    </section>

    <!-- FEATURES -->
    <section class="features">
      <div class="feature">
        <h3>🚚 Fast Delivery</h3>
        <p>Worldwide shipping within 3–5 business days.</p>
      </div>
      <div class="feature">
        <h3>✅ Official Merchandise</h3>
        <p>100% authentic Arsenal FC products.</p>
      </div>
      <div class="feature">
        <h3>💳 Secure Payments</h3>
        <p>Safe checkout with encrypted transactions.</p>
      </div>
    </section>

    <!-- CLUB INFO -->
    <section class="about-club">
      <h2>About Arsenal FC</h2>
      <p>
        Arsenal Football Club is one of the most successful and historic clubs in England,
        founded in 1886. Known for its attacking style and passionate supporters,
        Arsenal continues to inspire millions of fans around the world.
      </p>
    </section>

    <!-- CALL TO ACTION -->
    <section class="cta">
      <h2>Ready to support the Gunners?</h2>
      <RouterLink to="/shop">
        <BaseButton>Browse Products</BaseButton>
      </RouterLink>
    </section>

  </div>
</template>

<script>
import BaseButton from '../components/base/BaseButton.vue'

export default {
  components: { BaseButton }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

/* HERO */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.hero-text {
  max-width: 500px;
}
.hero-img {
  width: 300px;
  border-radius: 12px;
}

/* FEATURES */
.features {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.feature {
  background: #f3f3f3;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  flex: 1;
}

/* ABOUT */
.about-club {
  max-width: 700px;
}

/* CTA */
.cta {
  background: #db0007;
  color: white;
  padding: 30px;
  text-align: center;
  border-radius: 12px;
}
</style>
