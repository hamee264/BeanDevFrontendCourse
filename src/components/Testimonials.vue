<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="section-title">What Learners Are Saying</h2>
      <p class="section-subtitle">Real feedback from people who have taken our frontend courses.</p>

      <div class="testimonial-grid">
        <div class="testimonial-card" v-for="(t, i) in testimonials" :key="i">
          <div class="user-info">
            <img v-if="t.avatar" :src="t.avatar" alt="User avatar" class="avatar" />
            <div v-else class="avatar-fallback">{{ t.initials }}</div>
            <div>
              <h3 class="name">{{ t.name }}</h3>
              <p class="role">{{ t.role }}</p>
            </div>
          </div>
          <p class="message">“{{ t.message }}”</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          initials: "AB",
          name: "Aisha Bello",
          role: "Frontend Beginner",
          message: "This platform helped me build confidence in HTML and CSS. It's beginner-friendly and fun!",
          avatar: null, // You can add a URL here
        },
        {
          initials: "JM",
          name: "John Musa",
          role: "Student Developer",
          message: "The JavaScript tutorials are very practical. I finally understand DOM manipulation!",
          avatar: null,
        },
        {
          initials: "LN",
          name: "Lilian Nwachukwu",
          role: "Junior Web Developer",
          message: "The structure is amazing, and the examples are real-world based. Totally recommended.",
          avatar: null,
        },
      ],
    };
  },
};
</script>

<style scoped>
.testimonials {
  background: #fafafa;
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
}

.testimonial-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.testimonial-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: left;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.02);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #007bff;
}

.avatar-fallback {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #007bff;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name {
  margin: 0;
  font-size: 1.1rem;
  color: #111;
}

.role {
  margin: 0;
  font-size: 0.9rem;
  color: #777;
}

.message {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.5;
  font-style: italic;
}
</style>
