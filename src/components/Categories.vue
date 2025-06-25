<template>
  <section class="course-categories">
    <div class="container">
      <h2 class="section-title">Explore Course Categories</h2>
      <p class="section-subtitle">
        Swipe through structured frontend topics curated to guide you from beginner to pro.
      </p>

      <Splide :options="splideOptions" class="splide">
        <SplideSlide v-for="(category, i) in categories" :key="i">
          <div class="slide-wrapper">
            <div class="category-card">
              <div class="icon">{{ category.icon }}</div>
              <h3>{{ category.title }}</h3>
              <p>{{ category.description }}</p>
            </div>
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
      categories: [
        {
          icon: "📄",
          title: "HTML Fundamentals",
          description: "Start by mastering the structure of web pages using HTML5. Learn about semantic tags, document structure, forms, and accessibility best practices to build well-organized and readable pages.",
        },
        {
          icon: "🎨",
          title: "CSS Styling",
          description: "Learn to style your websites beautifully using modern CSS. From colors, typography, and spacing to Flexbox, Grid, and responsive design techniques, create layouts that look great on any device.",
        },
        {
          icon: "⚙️",
          title: "JavaScript Basics",
          description: "Bring interactivity to life by learning JavaScript syntax, variables, functions, loops, and DOM manipulation. You'll create dynamic features like modals, sliders, and real-time updates.",
        },
        {
          icon: "🔁",
          title: "Version Control",
          description: "Collaborate with ease and manage your code history using Git and GitHub. Learn how to clone repos, commit changes, resolve merge conflicts, and contribute to open-source projects.",
        },
        {
          icon: "🧩",
          title: "Frontend Frameworks",
          description: "Dive into powerful frameworks like Vue and React to build scalable apps using reusable components, routing, state management, and best practices in frontend architecture.",
        },
        {
          icon: "🚀",
          title: "Build & Deploy",
          description: "Optimize and launch your frontend projects using tools like Vite, Webpack, and Netlify. Learn to automate builds, minify assets, and deploy fast, production-ready apps.",
        },
      ],
      splideOptions: {
        type: 'loop',
        perPage: 3,
        gap: '1rem',
        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
        autoplay: true,
        pauseOnHover: true,
        arrows: true,
        pagination: false,
      },
    };
  },
};
</script>

<style scoped>
.course-categories {
  background: #f8f9fa;
  padding: 4rem 1rem;
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #111;
}

.section-subtitle {
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-inline: auto;
}

.splide__slide {
  display: flex;
  height: auto;
  padding: 1rem 0;
}

.slide-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
}

.category-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  transition: transform 0.3s ease;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.category-card:hover {
  transform: translateY(-5px);
  border-color: #007bff;
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.1);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #007bff;
}

.category-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #222;
}

.category-card p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
