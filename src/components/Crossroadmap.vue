<template>
  <section class="roadmap">
    <div class="container">
      <h2 class="section-title">Your Frontend Journey</h2>
      <p class="section-subtitle">Follow this step-by-step roadmap to become a skilled frontend developer.</p>

      <div class="steps">
        <div v-for="(step, i) in roadmap" :key="i" class="step">
          <div class="icon">{{ step.icon }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      roadmap: [
        {
          icon: "🚀",
          title: "1. Introduction to Web",
          description: "Understand how the web works, browsers, and basic tools.",
        },
        {
          icon: "📄",
          title: "2. HTML Essentials",
          description: "Learn semantic HTML and build the structure of web pages.",
        },
        {
          icon: "🎨",
          title: "3. Styling with CSS",
          description: "Style pages using modern, responsive, and flexible CSS.",
        },
        {
          icon: "⚙️",
          title: "4. JavaScript Basics",
          description: "Add interactivity and logic with JavaScript fundamentals.",
        },
        {
          icon: "🧱",
          title: "5. Projects & DOM",
          description: "Build projects and master DOM manipulation.",
        },
        {
          icon: "🌐",
          title: "6. Git & GitHub",
          description: "Track and share your code using version control tools.",
        },
        {
          icon: "🧩",
          title: "7. Frontend Frameworks",
          description: "Start working with frameworks like Vue, React, or Svelte.",
        },
        {
          icon: "🚢",
          title: "8. Build & Deploy",
          description: "Learn tools like Vite, then deploy your site online.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.roadmap {
  background: #ffffff;
  padding: 4rem 1rem;
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: auto;
}

.section-title {
  font-size: 2rem;
  color: #111;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2.5rem;
}

.steps {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.step {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #eee;
  transition: 0.3s ease;
  text-align: center;
}

.step:hover {
  transform: translateY(-5px);
  border-color: #007bff;
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.1);
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007bff;
}

.step h3 {
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 0.5rem;
}

.step p {
  font-size: 0.95rem;
  color: #555;
}
</style>
