<template>
  <div class="frameworks-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Frontend Frameworks</h1>
      <p>Build modern, interactive, and scalable websites using JavaScript frameworks.</p>
    </section>

    <!-- Table of Contents -->
    <section class="toc">
      <h2>Table of Contents</h2>
      <ul>
        <li><a href="#intro">1. What Are Frontend Frameworks?</a></li>
        <li><a href="#why">2. Why Use Frameworks?</a></li>
        <li><a href="#react">3. React</a></li>
        <li><a href="#vue">4. Vue.js</a></li>
        <li><a href="#angular">5. Angular</a></li>
        <li><a href="#others">6. Other Notable Frameworks</a></li>
        <li><a href="#choose">7. Choosing the Right Framework</a></li>
        <li><a href="#resources">8. Resources</a></li>
      </ul>
    </section>

    <!-- Content Sections -->
    <section
      v-for="(section, index) in sections"
      :id="section.id"
      :key="index"
      class="content-section"
    >
      <h2>{{ index + 1 }}. {{ section.title }}</h2>
      <div v-html="section.content"></div>
    </section>

    <!-- Outro -->
    <section class="outro">
      <p>Mastering a frontend framework helps you build real-world apps with ease. Start with one, build projects, and grow from there!</p>
    </section>
  </div>
    <FooterVue></FooterVue>

</template>

<script setup>
import FooterVue from "../../components/Footer.vue";

const sections = [
  {
    id: 'intro',
    title: 'What Are Frontend Frameworks?',
    content: `
      <p>Frontend frameworks are tools that simplify building user interfaces. Instead of writing everything from scratch with just HTML, CSS, and JavaScript, frameworks provide reusable components, structure, and functionality out of the box.</p>
      <p>Think of them like a house-building kit: instead of building each brick by hand, you get pre-made parts (walls, doors) that you can arrange, style, and customize.</p>
    `
  },
  {
    id: 'why',
    title: 'Why Use Frameworks?',
    content: `
      <p>Frameworks save time and improve code quality. Here's why they’re important:</p>
      <ul>
        <li>✔️ <strong>Reusable Components:</strong> Build once, reuse everywhere.</li>
        <li>✔️ <strong>Faster Development:</strong> Features like routing and state management are built in.</li>
        <li>✔️ <strong>Maintainability:</strong> Organize large codebases more efficiently.</li>
        <li>✔️ <strong>Active Community:</strong> Get plugins, tutorials, and help.</li>
        <li>✔️ <strong>Best Practices:</strong> Encourages clean and scalable code.</li>
      </ul>
    `
  },
  {
    id: 'react',
    title: 'React',
    content: `
      <p><strong>React</strong> is a JavaScript library developed by Facebook, used to build user interfaces. It is component-based, meaning your UI is split into reusable pieces called components.</p>
      <ul>
        <li><strong>Created By:</strong> Facebook (2013)</li>
        <li><strong>Syntax:</strong> JSX (HTML-like syntax inside JavaScript)</li>
        <li><strong>Strengths:</strong> Fast rendering with Virtual DOM, flexible, large ecosystem</li>
        <li><strong>Ideal for:</strong> Large apps with complex UIs</li>
      </ul>
      <pre><code>function Welcome() {
  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}</code></pre>
    `
  },
  {
    id: 'vue',
    title: 'Vue.js',
    content: `
      <p><strong>Vue.js</strong> is a progressive framework known for its simplicity. You can use it for small tasks or full apps. It’s especially popular among beginners and individual developers.</p>
      <ul>
        <li><strong>Created By:</strong> Evan You (2014)</li>
        <li><strong>Syntax:</strong> HTML templates, JavaScript, and CSS in one file (.vue)</li>
        <li><strong>Strengths:</strong> Simple, easy to learn, reactive data binding</li>
        <li><strong>Ideal for:</strong> Beginners, SPAs, dashboards</li>
      </ul>
      <pre><code>&lt;template&gt;
  &lt;h1&gt;Hello from Vue!&lt;/h1&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'WelcomeComponent'
}
&lt;/script&gt;</code></pre>
    `
  },
  {
    id: 'angular',
    title: 'Angular',
    content: `
      <p><strong>Angular</strong> is a full-fledged frontend framework developed by Google. It’s built with TypeScript and is suitable for large enterprise applications.</p>
      <ul>
        <li><strong>Created By:</strong> Google (2016+)</li>
        <li><strong>Syntax:</strong> TypeScript + HTML Templates</li>
        <li><strong>Strengths:</strong> Built-in features like HTTP, routing, forms</li>
        <li><strong>Ideal for:</strong> Large enterprise apps</li>
      </ul>
      <pre><code>@Component({
  selector: 'app-root',
  template: '&lt;h1&gt;Welcome to Angular!&lt;/h1&gt;'
})</code></pre>
    `
  },
  {
    id: 'others',
    title: 'Other Notable Frameworks',
    content: `
      <ul>
        <li><strong>Svelte</strong> – Compiles code to minimal JavaScript. Super fast and lightweight.</li>
        <li><strong>Next.js</strong> – A React framework for SEO-friendly apps, great for blogs and eCommerce.</li>
        <li><strong>Nuxt.js</strong> – A Vue.js framework similar to Next.js, good for SEO and structure.</li>
        <li><strong>SolidJS</strong> – Highly reactive, ultra-performant, and gaining popularity.</li>
        <li><strong>Qwik</strong> – Built for instant-loading websites using resumable JavaScript.</li>
      </ul>
    `
  },
  {
    id: 'choose',
    title: 'Choosing the Right Framework',
    content: `
      <p>If you’re just starting out, it’s best to choose a beginner-friendly framework and stick with it while building projects. Here’s a guide:</p>
      <ul>
        <li><strong>Vue.js:</strong> Great for beginners and small to medium projects</li>
        <li><strong>React:</strong> Popular in jobs and versatile for all projects</li>
        <li><strong>Angular:</strong> Best for enterprise-level and large-scale projects</li>
        <li><strong>Svelte:</strong> Excellent performance and beginner-friendly</li>
      </ul>
      <p>Remember: the best framework is the one that fits your project's needs and feels comfortable for you to use.</p>
    `
  },
  {
    id: 'resources',
    title: 'Resources',
    content: `
      <ul>
        <li><a href="https://vuejs.org/" target="_blank">Vue.js Official Docs</a></li>
        <li><a href="https://reactjs.org/" target="_blank">React Official Docs</a></li>
        <li><a href="https://angular.io/" target="_blank">Angular Official Docs</a></li>
        <li><a href="https://svelte.dev/" target="_blank">Svelte Docs</a></li>
        <li><a href="https://nextjs.org/" target="_blank">Next.js Docs</a></li>
      </ul>
    `
  }
];
</script>

<style scoped>
.frameworks-page {
  max-width: 960px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}
.hero {
  background: linear-gradient(to right, #00c6ff, #0072ff);
  padding: 2rem;
  color: white;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 2rem;
}
.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
}
.hero p {
  font-size: 1.3rem;
}
.toc h2 {
  margin-bottom: 1rem;
}
.toc ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  padding-left: 1rem;
}
.toc li{
  list-style-type: none;
}
.toc a {
  text-decoration: none;
  color: #0072ff;
  font-weight: 500;
  background-color: #e0f0ff;
  padding: 0.5rem 0.75rem;
  display: block;
  border-radius: 6px;
  transition: all 0.3s ease;

  /* Prevent line breaks inside links */
  white-space: nowrap;
  overflow: hidden;       /* Hide overflow */
  text-overflow: ellipsis; /* Show ... if text is too long */
}

.toc a:hover {
  background-color: #cce6ff;
  text-decoration: underline;
}

.content-section {
  margin-top: 2.5rem;
  line-height: 1.7;
}
.content-section h2 {
  color: #0072ff;
  margin-bottom: 0.75rem;
  border-left: 4px solid #0072ff;
  padding-left: 0.5rem;
}
pre {
  background: #f8f8f8;
  padding: 1rem;
  overflow-x: auto;
  border-left: 4px solid #0072ff;
  border-radius: 4px;
  font-size: 0.95rem;
  margin-top: 1rem;
}
code {
  font-family: monospace;
  color: #d63384;
}
.outro {
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
  background: #f1f1f1;
  padding: 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
}
</style>
