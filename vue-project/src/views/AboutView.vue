<template>
  <div class="about">

    <section class="section">
      <h2>Project Overview</h2>
      <p>
        This web application was developed as part of a university assignment for the
        subject <strong>Frontend Technologies</strong>. The main objective was to design
        and implement a modern single-page application using Vue.js while following
        best practices in component-based architecture and state management.
      </p>
      <p>
        The project simulates a real-world football merchandise store where users can
        browse products, view detailed information, manage their shopping cart and
        complete a mock checkout process. The application focuses on usability,
        responsiveness and clean code structure.
      </p>
    </section>

    <section class="section">
      <h2>Technologies Used</h2>
      <p>
        The project was built using modern frontend tools and frameworks to ensure
        performance, scalability and maintainability:
      </p>
      <ul>
        <li>Vue.js 3 using the Options API</li>
        <li>Vue Router for navigation between pages</li>
        <li>Pinia for global state management</li>
        <li>HTML5 and CSS3 for layout and styling</li>
        <li>Vite as the development and build tool</li>
      </ul>
    </section>

    <section class="section">
      <h2>Application Features</h2>
      <p>
        The application offers a complete shopping flow designed to demonstrate core
        frontend development concepts:
      </p>
      <ul>
        <li>Browsing and filtering football merchandise products</li>
        <li>Detailed product pages with dynamic routing</li>
        <li>Shopping cart with quantity management and price calculation</li>
        <li>Reusable UI components such as buttons, product cards and cart items</li>
        <li>Responsive layout for desktop and mobile devices</li>
      </ul>
    </section>

    <section class="section">
      <h2>About Arsenal FC</h2>
      <p>
        Arsenal Football Club was founded in 1886 and is one of the most successful and
        historic football clubs in England. Based in North London, the club is widely
        known as <strong>The Gunners</strong> and plays its home matches at the Emirates
        Stadium.
      </p>
      <p>
        Arsenal has a rich tradition of attacking football, youth development and
        strong fan culture worldwide. This project is inspired by the club’s identity
        and global fanbase, but it is purely educational and not an official store.
      </p>
    </section>

    <section class="footer">
      <p>
        This project demonstrates practical frontend development skills using Vue.js
        and modern web technologies.
      </p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.section h2 {
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.section p,
.section li {
  font-size: 1rem;
  line-height: 1.65;
}

ul {
  padding-left: 18px;
}

.footer {
  text-align: center;
  color: #777;
  font-size: 0.95rem;
  margin-top: 20px;
}
</style>
