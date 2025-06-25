<template>
  <section class="cta-section">
    <div class="cta-container">
      <h2 class="cta-title">Ready to Level Up Your Frontend Skills?</h2>
      <p class="cta-text">
        Whether you're just starting or improving your craft, our guided lessons and real-world projects will help you grow confidently.
      </p>
      <div class="cta-buttons">
        <router-link to="/tutorials" class="btn primary">Browse Courses</router-link>
        <router-link to="/" class="btn secondary">Join Free</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: linear-gradient(to right, #007bff, #0056b3);
  color: #fff;
  padding: 4rem 1rem;
  text-align: center;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.cta-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.cta-text {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #e3e3e3;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.btn.primary {
  background: #fff;
  color: #007bff;
}

.btn.primary:hover {
  background: #f1f1f1;
}

.btn.secondary {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.btn.secondary:hover {
  background: rgba(255, 255, 255, 0.15);
}
</style>
