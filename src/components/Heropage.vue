<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Become a Frontend Pro</h1>
      <p>
        Kickstart your frontend journey with expert tutorials, real-world examples, and modern tools like HTML, CSS, JavaScript, and Vue.js.
      </p>
      <div class="hero-buttons">
        <router-link to="/tutorials" class="btn primary">Start Learning</router-link>
        <router-link to="/whyFrontend" class="btn secondary">Why Frontend?</router-link>
      </div>
    </div>

    <div class="hero-image">
      <img src="/src/assets/image.png" alt="Illustration of web development tools" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 1rem;
  background: #f9f9f9;
  gap: 3rem;
}

.hero-content {
  max-width: 600px;
}

.hero h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111;
}

.hero p {
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn.primary {
  background: #007bff;
  color: white;
}

.btn.primary:hover {
  background: #0056b3;
}

.btn.secondary {
  background: #e2e6ea;
  color: #333;
}

.btn.secondary:hover {
  background: #d6d8db;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Responsive Layout */
@media (min-width: 768px) {
  .hero {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 6rem 4rem;
  }

  .hero-content {
    max-width: 50%;
  }

  .hero-image {
    max-width: 45%;
    margin-top: 0;
  }
}
</style>
