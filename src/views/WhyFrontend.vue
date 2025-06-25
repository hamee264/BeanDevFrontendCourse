<template>
  <div class="why-frontend">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Why Choose Frontend Development?</h1>
      <p>Explore how frontend development empowers you to bring ideas to life and build beautiful web experiences.</p>
      <button class="cta-btn" @click="$router.push('/topics/html')">Start Learning</button>
    </section>

    <!-- Content Sections -->
    <section class="content-section">
      <h2>✨ What is Frontend Development?</h2>
      <p>Frontend development is the process of building the user-facing part of websites and applications. It involves designing layouts, interactions, and experiences that users directly interact with.</p>
    </section>

    <section class="content-section">
      <h2>🌐 Why Learn Frontend?</h2>
      <ul>
        <li><strong>Visual Creativity:</strong> You see instant results as you build beautiful UIs.</li>
        <li><strong>High Demand:</strong> Frontend developers are in demand worldwide.</li>
        <li><strong>Versatile Skills:</strong> Mastering HTML, CSS, and JavaScript opens doors to web, mobile, and desktop apps.</li>
        <li><strong>Freelance & Remote Opportunities:</strong> Build portfolios, work from anywhere, or launch your own products.</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>🛠️ What You'll Learn</h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>Frameworks like Vue, React, or Angular</li>
        <li>Responsive design and accessibility</li>
        <li>Working with APIs and real-time data</li>
        <li>Version control with Git</li>
        <li>UI/UX design principles</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>🚀 Your Frontend Journey Starts Here</h2>
      <p>Whether you're a beginner or looking to level up, our platform offers tutorials, examples, videos, and challenges to guide you from zero to hero in frontend development.</p>
      <div class="cta-group">
        <button @click="$router.push('/topics/html')">Explore HTML</button>
        <button @click="$router.push('/tutorials')">Watch Tutorials</button>
      </div>
    </section>
  </div>
  <FooterVue></FooterVue>
</template>

<script setup>
import FooterVue from '../components/Footer.vue';
</script>

<style scoped>
.why-frontend {
  font-family: 'Segoe UI', sans-serif;
  color: #1f2937;
  padding: 2rem 1rem;
  max-width: 960px;
  margin: auto;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(to right, #38bdf8, #0ea5e9);
  color: white;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.cta-btn {
  background-color: white;
  color: #0ea5e9;
  font-weight: bold;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.cta-btn:hover {
  background-color: #e0f2fe;
}

/* Sections */
.content-section {
  margin-bottom: 2.5rem;
}

.content-section h2 {
  font-size: 1.5rem;
  color: #0ea5e9;
  margin-bottom: 1rem;
}

.content-section ul {
  padding-left: 1.5rem;
  line-height: 1.8;
}

.content-section p {
  line-height: 1.7;
  font-size: 1.05rem;
}

/* CTA Group */
.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.cta-group button {
  background-color: #0ea5e9;
  color: white;
  border: none;
  padding: 0.6rem 1.3rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}
.cta-group button:hover {
  background-color: #0284c7;
}

/* Responsive */
@media (max-width: 600px) {
  .hero h1 {
    font-size: 2rem;
  }

  .cta-group {
    flex-direction: column;
  }
}
</style>
