<template>
  <div class="build-tools-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Frontend Build Tools</h1>
      <p>Automate, optimize, and streamline your frontend development workflow with build tools.</p>
    </section>

    <!-- Table of Contents -->
    <section class="toc">
      <h2>Table of Contents</h2>
      <ul>
        <li><a href="#intro">1. What Are Build Tools?</a></li>
        <li><a href="#why">2. Why Use Build Tools?</a></li>
        <li><a href="#popular">3. Popular Build Tools</a></li>
        <li><a href="#task-runners">4. Task Runners</a></li>
        <li><a href="#module-bundlers">5. Module Bundlers</a></li>
        <li><a href="#package-managers">6. Package Managers</a></li>
        <li><a href="#modern-tools">7. Modern Build Tools</a></li>
        <li><a href="#getting-started">8. Getting Started</a></li>
        <li><a href="#resources">9. Resources & Tutorials</a></li>
      </ul>
    </section>

    <!-- Content Sections -->
    <section id="intro" class="content-section">
      <h2>1. What Are Build Tools?</h2>
      <p>
        Build tools are software that automate tasks in the development process to make your workflow more efficient.
        These tasks can include compiling code, bundling files, minifying assets, running tests, and refreshing your browser automatically.
      </p>
      <p>
        Instead of manually performing repetitive tasks, build tools help speed up development and improve code quality.
      </p>
    </section>

    <section id="why" class="content-section">
      <h2>2. Why Use Build Tools?</h2>
      <ul>
        <li>✅ Automate repetitive tasks like compilation and testing</li>
        <li>✅ Optimize code by minifying and compressing assets</li>
        <li>✅ Bundle multiple JavaScript and CSS files into a single file for faster loading</li>
        <li>✅ Enable the use of next-generation JavaScript features via transpiling</li>
        <li>✅ Provide live reloading or hot module replacement for faster development feedback</li>
        <li>✅ Improve project maintainability and scalability</li>
      </ul>
    </section>

    <section id="popular" class="content-section">
      <h2>3. Popular Build Tools</h2>
      <p>There are many build tools available. Some of the most widely used include:</p>
      <ul>
        <li><strong>Task runners:</strong> automate specific tasks (e.g., Gulp, Grunt)</li>
        <li><strong>Module bundlers:</strong> combine files and dependencies (e.g., Webpack, Rollup, Parcel)</li>
        <li><strong>Package managers:</strong> manage libraries and dependencies (e.g., npm, Yarn)</li>
        <li><strong>Modern build tools:</strong> fast, zero-config tools (e.g., Vite, Snowpack)</li>
      </ul>
    </section>

    <section id="task-runners" class="content-section">
      <h2>4. Task Runners</h2>
      <p>Task runners automate repetitive tasks like compiling Sass, concatenating files, or running tests.</p>
      <p><strong>Gulp</strong> is one of the most popular task runners that uses code over configuration, meaning you write JavaScript to define tasks.</p>
      <pre><code>const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'));
}

exports.default = series(compileSass);</code></pre>
      <p>Gulp can watch files for changes and automatically rerun tasks, saving you time.</p>
    </section>

    <section id="module-bundlers" class="content-section">
      <h2>5. Module Bundlers</h2>
      <p>Module bundlers combine many JavaScript (and sometimes CSS) files into one or few bundles, resolving dependencies automatically.</p>
      <p><strong>Webpack</strong> is the most popular bundler with a powerful plugin system and flexibility.</p>
      <pre><code>module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  mode: 'development',
};</code></pre>
      <p>Other bundlers like <strong>Rollup</strong> and <strong>Parcel</strong> offer different features such as easier configuration or faster builds.</p>
    </section>

    <section id="package-managers" class="content-section">
      <h2>6. Package Managers</h2>
      <p>Package managers help install and manage third-party libraries and dependencies in your project.</p>
      <ul>
        <li><strong>npm</strong> is the default package manager for Node.js and has the largest ecosystem.</li>
        <li><strong>Yarn</strong> is an alternative to npm, offering faster installs and offline support.</li>
      </ul>
      <pre><code>npm install react
yarn add vue</code></pre>
    </section>

    <section id="modern-tools" class="content-section">
      <h2>7. Modern Build Tools</h2>
      <p>Modern build tools like <strong>Vite</strong> and <strong>Snowpack</strong> aim to simplify configuration and speed up development by leveraging native ES modules and faster bundling.</p>
      <p>They offer hot module replacement out of the box and require less setup than traditional tools like Webpack.</p>
      <pre><code>npm init vite@latest my-app
cd my-app
npm install
npm run dev</code></pre>
      <p>This sets up a fast development environment with minimal config.</p>
    </section>

    <section id="getting-started" class="content-section">
      <h2>8. Getting Started</h2>
      <p>To get started with build tools:</p>
      <ol>
        <li>Learn basic command line usage (e.g., cd, npm commands).</li>
        <li>Pick a simple task runner like Gulp or a modern tool like Vite.</li>
        <li>Practice automating simple tasks: compiling Sass, bundling JS.</li>
        <li>Gradually add more advanced features: live reload, testing, linting.</li>
        <li>Explore official documentation and tutorials.</li>
      </ol>
      <p>Start small, and build your knowledge step-by-step.</p>
    </section>

    <section id="resources" class="content-section">
      <h2>9. Resources & Tutorials</h2>
      <ul>
        <li><a href="https://gulpjs.com/" target="_blank">Gulp Official Site</a></li>
        <li><a href="https://webpack.js.org/" target="_blank">Webpack Official Documentation</a></li>
        <li><a href="https://vitejs.dev/" target="_blank">Vite Official Website</a></li>
        <li><a href="https://docs.npmjs.com/" target="_blank">npm Docs</a></li>
        <li><a href="https://yarnpkg.com/" target="_blank">Yarn Official Site</a></li>
        <li><a href="https://javascript.info/modules-intro" target="_blank">JavaScript Modules (Intro)</a></li>
      </ul>
    </section>

    <!-- Outro -->
    <section class="outro">
      <p>Mastering build tools will greatly improve your frontend development workflow and project quality. Keep practicing and building projects!</p>
    </section>
  </div>
  <FooterVue></FooterVue>
</template>

<script setup>

import FooterVue from "../../components/Footer.vue";
</script>

<style scoped>
.build-tools-page {
  max-width: 960px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

.hero {
  /* Changed from orange gradient to sky blue gradient */
  background: linear-gradient(to right, #0ea5e9, #3b82f6);
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

.toc a {
  text-decoration: none;
  color: #0ea5e9; /* changed from orange to sky blue */
  font-weight: 500;
  background-color: #dbf4ff; /* lighter sky blue background */
  padding: 0.5rem 0.75rem;
  display: block;
  border-radius: 6px;
  transition: all 0.3s ease;
  list-style-type: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.toc a:hover {
  background-color: #b5defe; /* slightly darker blue on hover */
  text-decoration: underline;
}
.toc li{
  list-style-type: none;
}
.content-section {
  margin-top: 2.5rem;
  line-height: 1.7;
}

.content-section h2 {
  color: #0ea5e9; /* section heading in sky blue */
  margin-bottom: 0.75rem;
  border-left: 4px solid #0ea5e9;
  padding-left: 0.5rem;
}

pre {
  background: #f8f8f8;
  padding: 1rem;
  overflow-x: auto;
  border-left: 4px solid #0ea5e9; /* changed from orange */
  border-radius: 4px;
  font-size: 0.95rem;
  margin-top: 1rem;
}

code {
  font-family: monospace;
  color: #2563eb; /* a deeper blue for code */
}

.outro {
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
  background: #f1f9ff;
  padding: 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
}

</style>
