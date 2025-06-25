<template>
  <div class="js-topic-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Learn JavaScript</h1>
      <p>Make your websites interactive and dynamic with JavaScript.</p>
    </section>

    <!-- Table of Contents -->
    <section class="toc">
      <h2>Table of Contents</h2>
      <ul>
        <li><a href="#intro">1. History, Importance & Uses</a></li>
        <li><a href="#syntax">2. Syntax & Variables</a></li>
        <li><a href="#datatypes">3. Data Types</a></li>
        <li><a href="#operators">4. Operators</a></li>
        <li><a href="#conditionals">5. Conditionals</a></li>
        <li><a href="#loops">6. Loops</a></li>
        <li><a href="#functions">7. Functions</a></li>
        <li><a href="#dom">8. DOM Manipulation</a></li>
        <li><a href="#events">9. Events</a></li>
        <li><a href="#resources">10. Resources</a></li>
      </ul>
    </section>

    <!-- Content Sections -->
    <section v-for="(section, index) in sections" :id="section.id" :key="index" class="content-section">
      <h2>{{ index + 1 }}. {{ section.title }}</h2>
      <div v-html="section.content"></div>
    </section>

    <!-- Outro -->
    <section class="outro">
      <p>JavaScript brings your websites to life. Next, explore advanced topics like APIs, ES6, and frameworks!</p>
    </section>
  </div>
  <FooterVue></FooterVue>
</template>

<script setup>
import FooterVue from "../../components/Footer.vue";

const sections = [
  {
    id: 'intro',
    title: 'History, Importance & Uses',
    content: `
      <h3>📜 History of JavaScript</h3>
      <p><strong>1995:</strong> JavaScript was created in just 10 days by <strong>Brendan Eich</strong> at Netscape. Originally called <em>Mocha</em>, then <em>LiveScript</em>, it was renamed JavaScript to ride Java’s popularity.</p>
      <p><strong>1997:</strong> It was standardized as <strong>ECMAScript</strong> (or ES) by ECMA International.</p>
      <p>Over the years, JavaScript evolved with major updates like <code>ES5</code> (2009) and <code>ES6</code> (2015) which introduced modern features like <code>let</code>, <code>const</code>, arrow functions, classes, and modules.</p>

      <h3>🌟 Importance of JavaScript</h3>
      <ul>
        <li><strong>Browser Interactivity:</strong> JavaScript enables dynamic behaviors on web pages.</li>
        <li><strong>Ubiquity:</strong> Runs in all modern browsers and is used on nearly every website.</li>
        <li><strong>Full-Stack Development:</strong> With Node.js, JavaScript can run server-side as well.</li>
        <li><strong>Large Ecosystem:</strong> Includes tools like React, Vue, Angular, Express, and millions of npm packages.</li>
        <li><strong>Versatile:</strong> Used for frontend, backend, mobile apps, desktop apps, and more.</li>
      </ul>

      <h3>🛠️ Common Uses of JavaScript</h3>
      <ul>
        <li>Creating dynamic content (e.g., form validation, animations)</li>
        <li>Building SPAs with frameworks like React, Vue, and Angular</li>
        <li>Server-side programming with Node.js</li>
        <li>Developing mobile apps using React Native or Ionic</li>
        <li>Browser extensions and desktop apps (Electron)</li>
        <li>Game development and data visualization</li>
      </ul>
    `
  },
  {
    id: 'syntax',
    title: 'Syntax & Variables',
    content: `
      <p>JavaScript syntax includes variables, keywords, and punctuation like semicolons and brackets. Variables can be declared using <code>var</code>, <code>let</code>, or <code>const</code>:</p>
      <pre><code>let name = "John";
const age = 25;
var isStudent = true;</code></pre>
    `
  },
  {
    id: 'datatypes',
    title: 'Data Types',
    content: `
      <p>JavaScript supports various data types:</p>
      <ul>
        <li><code>String</code> — text: <code>"Hello"</code></li>
        <li><code>Number</code> — numeric values: <code>42</code></li>
        <li><code>Boolean</code> — <code>true</code> or <code>false</code></li>
        <li><code>Array</code> — collection of values: <code>[1, 2, 3]</code></li>
        <li><code>Object</code> — key-value pairs: <code>{ name: "Alice", age: 30 }</code></li>
      </ul>
    `
  },
  {
    id: 'operators',
    title: 'Operators',
    content: `
      <p>Operators perform operations on values and variables.</p>
      <pre><code>// Arithmetic
let sum = 5 + 3;

// Comparison
let isEqual = 5 === "5"; // false

// Logical
let result = true && false; // false</code></pre>
    `
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    content: `
      <p>Conditional statements run different code depending on a condition.</p>
      <pre><code>if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}</code></pre>
    `
  },
  {
    id: 'loops',
    title: 'Loops',
    content: `
      <p>Loops repeat code until a condition is met.</p>
      <pre><code>// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
  count++;
}</code></pre>
    `
  },
  {
    id: 'functions',
    title: 'Functions',
    content: `
      <p>Functions allow you to reuse blocks of code:</p>
      <pre><code>function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Jane"));</code></pre>
    `
  },
  {
    id: 'dom',
    title: 'DOM Manipulation',
    content: `
      <p>JavaScript can access and change the structure and style of a web page using the Document Object Model (DOM).</p>
      <pre><code>document.getElementById("demo").innerText = "Changed!";</code></pre>
    `
  },
  {
    id: 'events',
    title: 'Events',
    content: `
      <p>Events are actions that happen in the browser (e.g., clicking, typing).</p>
      <pre><code>document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});</code></pre>
    `
  },
  {
    id: 'resources',
    title: 'Resources',
    content: `
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN JavaScript Docs</a></li>
        <li><a href="https://javascript.info/" target="_blank">JavaScript.info</a></li>
        <li><a href="https://www.w3schools.com/js/" target="_blank">W3Schools JavaScript</a></li>
      </ul>
    `
  }
];
</script>

<style scoped>
.js-topic-page {
  max-width: 960px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}
.hero {
  background: linear-gradient(to right, #56CCF2, #2F80ED);
  padding: 2rem;
  color: #fff;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #e6f0ff;          /* very light sky blue */
  color: #2f80ed;               /* strong sky blue */
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border-left: 5px solid #56ccf2; /* lighter sky blue */
  white-space: nowrap; /* Prevent line breaks */
  overflow: hidden;
  text-overflow: ellipsis;
}
.toc a:hover {
  background-color: #cce4ff; /* lighter highlight */
  text-decoration: underline;
}
.content-section {
  margin-top: 2.5rem;
  line-height: 1.7;
}
.content-section h2 {
  color: #2f80ed;               /* strong blue */
  margin-bottom: 0.75rem;
  border-left: 4px solid #2f80ed;
  padding-left: 0.5rem;
}
pre {
  background: #e6f0ff;           /* very light blue */
  padding: 1rem;
  overflow-x: auto;
  border-left: 4px solid #2f80ed; /* blue border */
  border-radius: 4px;
  font-size: 0.95rem;
  margin-top: 1rem;
}
code {
  font-family: monospace;
  color: #1c4a99;               /* dark blue text */
}
.outro {
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
  background: #e6f0ff;           /* light sky blue background */
  padding: 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  color: #333;
}

</style>
