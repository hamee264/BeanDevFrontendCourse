<template>
  <section class="features-carousel">
    <div class="container">
      <h2 class="title">What You'll Learn</h2>
      <p class="subtitle">
        Swipe through the key frontend skills you'll master in this course.
      </p>

      <Splide :options="splideOptions" aria-label="Course Features">
        <SplideSlide v-for="(feature, index) in features" :key="index">
          <div class="feature-card">
            <div class="icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      features: [
        { icon: "📄", title: "HTML & Structure", description: "Build semantic, accessible page layouts." },
        { icon: "🎨", title: "CSS & Design", description: "Create stylish, responsive UIs with CSS." },
        { icon: "⚙️", title: "JavaScript Basics", description: "Add interactivity and behavior to pages." },
        { icon: "🔄", title: "Version Control", description: "Collaborate and track code using Git." },
        { icon: "📦", title: "Frameworks", description: "Work with Vue, React and other libraries." },
        { icon: "🚀", title: "Build Tools", description: "Use tools like Vite, Webpack for optimization." },
      ],
      splideOptions: {
        type: "loop",
        perPage: 3,
        gap: "1.5rem",
        autoplay: true,
        pauseOnHover: true,
        arrows: true,
        pagination: true,
        breakpoints: {
          1024: { perPage: 2 },
          768: { perPage: 1 },
        },
      },
    };
  },
};
</script>

<style scoped>
.features-carousel {
  background: #f8f9fa;
  padding:  1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  color: #111;
  text-align: center;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem;
}

/* Feature Card */
.feature-card {
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #007bff;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.2rem;
  color: #222;
  margin-bottom: 0.5rem;
}

.feature-card p {
  font-size: 0.95rem;
  color: #555;
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .feature-card {
    padding: 1.5rem 1rem;
    text-align: left;
  }

  .icon {
    font-size: 2rem;
  }

  .feature-card h3 {
    font-size: 1.1rem;
  }

  .feature-card p {
    font-size: 0.9rem;
  }
}
</style>
