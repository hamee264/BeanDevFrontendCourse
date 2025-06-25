<template>
  <footer class="site-footer">
    <div class="container">
      <!-- Footer Grid -->
      <div class="footer-grid">
        <!-- Brand Info -->
        <div class="footer-brand">
          <h3>Frontend Dev Hub</h3>
          <p>
            Learn frontend step-by-step with structured content, real-world projects,
            and clear explanations.
          </p>
         <p><b>Contact:</b> 09043339536</p>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/topics/html">Courses</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/tutorials">Tutorials</router-link></li>
          </ul>
        </div>

        <!-- Contact Form -->
        <div class="footer-form">
          <h4>Send Mail</h4>
          <form @submit.prevent="handleSubmit" action="https://formspree.io/f/xvgrrypv">
            <input type="text" v-model="form.name" placeholder="Your Name" required />
            <input type="email" v-model="form.email" placeholder="Your Email" required />
            <textarea v-model="form.message" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <p>&copy; 2025 Frontend Dev Hub. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      alert(`Thanks, ${this.form.name}! Your message has been sent.`);
      this.form = { name: '', email: '', message: '' };
    },
  },
};
</script>

<style scoped>
.site-footer {
  background: #0d6efd;
  color: #fff;
  padding: 3rem 1rem;
  font-family: 'Segoe UI', sans-serif;
}

.container {
  max-width: 1100px;
  margin: auto;
  width: 100%;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

/* Desktop grid */
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.footer-brand h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.footer-brand p {
  font-size: 0.95rem;
  color: #e0e0e0;
  line-height: 1.6;
}

.footer-links h4,
.footer-form h4 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #f1f1f1;
  text-decoration: none;
  transition: 0.3s;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: #fff;
  text-decoration: underline;
}

.footer-form input,
.footer-form textarea {
  width: 95%;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 0.95rem;
  resize: vertical;
}

.footer-form input:focus,
.footer-form textarea:focus {
  outline: 2px solid #fff;
  background: #f5f5f5;
  color: #000;
}

.footer-form button {
  background-color: #fff;
  color: #0d6efd;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  width: 95%;
}

.footer-form button:hover {
  background-color: #e6e6e6;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1.5rem;
  font-size: 0.9rem;
  color: #ccc;
}

/* Mobile adjustments */
@media (max-width: 480px) {
  .footer-brand p,
  .footer-links a,
  .footer-form input,
  .footer-form textarea {
    font-size: 0.9rem;
  }

  .footer-form button {
    font-size: 0.95rem;
    padding: 0.65rem 1.2rem;
  }
}
</style>
