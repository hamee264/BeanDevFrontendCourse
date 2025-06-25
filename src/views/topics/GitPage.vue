<template>
  <div class="github-pages">
    <!-- Hero Section -->
    <section class="hero">
      <h1>GitHub Pages</h1>
      <p>Host and share your websites for free using GitHub's built-in static site hosting.</p>
    </section>

    <!-- Table of Contents -->
    <section class="toc">
      <h2>Table of Contents</h2>
      <ul>
        <li><a href="#what">1. What is GitHub Pages?</a></li>
        <li><a href="#why">2. Why Use GitHub Pages?</a></li>
        <li><a href="#create">3. Creating a GitHub Pages Site</a></li>
        <li><a href="#upload">4. Uploading Your Project</a></li>
        <li><a href="#vue">5. Deploying a Vue Project</a></li>
        <li><a href="#troubleshoot">6. Common Issues & Fixes</a></li>
        <li><a href="#resources">7. Helpful Resources</a></li>
      </ul>
    </section>

    <!-- Sections -->
    <section id="what" class="content-section">
      <h2>1. What is GitHub Pages?</h2>
      <p>
        GitHub Pages is a free service from GitHub that lets you publish websites directly from a GitHub repository.
        You don’t need to buy hosting or manage servers — just upload your files, and GitHub will serve your site to the world.
      </p>
      <p>
        It’s designed for <strong>static websites</strong>, meaning sites built with only HTML, CSS, and JavaScript. 
        There is no backend code running like PHP or Node.js — just files served as they are.
      </p>
      <p><em>Tip: If you want to build a portfolio, documentation, or demo, GitHub Pages is perfect to get started quickly and free!</em></p>
    </section>

    <section id="why" class="content-section">
      <h2>2. Why Use GitHub Pages?</h2>
      <ul>
        <li><strong>Free Hosting:</strong> You pay nothing, and there are no ads on your site.</li>
        <li><strong>Easy to Setup:</strong> No complex server configurations or hosting accounts required.</li>
        <li><strong>Integrates with GitHub:</strong> Your website files live with your code, making version control easy.</li>
        <li><strong>Great for Frontend Projects:</strong> Ideal for portfolios, demos, personal blogs, and documentation.</li>
        <li><strong>Custom Domains:</strong> You can connect your own domain name to your GitHub Pages site.</li>
        <li><strong>Automatic HTTPS:</strong> Your site is secure with HTTPS enabled by default.</li>
      </ul>
      <p><em>Tip: Use GitHub Pages if you want a hassle-free way to share your projects online fast.</em></p>
    </section>

    <section id="create" class="content-section">
      <h2>3. Creating a GitHub Pages Site (Beginner Friendly)</h2>
      <p>Here is a step-by-step guide for beginners to create your first GitHub Pages site:</p>
      <ol>
        <li>Go to <a href="https://github.com" target="_blank" rel="noopener">github.com</a> and sign in or create a free account.</li>
        <li>Click the <strong>+ icon</strong> in the top right corner and select <strong>New repository</strong>.</li>
        <li>Give your repository a name (e.g., <code>my-portfolio</code>), keep it <strong>Public</strong>, and click <strong>Create repository</strong>.</li>
        <li>Upload or create an <code>index.html</code> file — this is the homepage of your site.</li>
        <li>Go to the repository’s <strong>Settings</strong> tab.</li>
        <li>Scroll down to the <strong>Pages</strong> section in the sidebar or main settings.</li>
        <li>Under <strong>Source</strong>, select the <code>main</code> branch and the root folder ("/"). Click <strong>Save</strong>.</li>
        <li>Your website URL will be shown (usually <code>https://yourusername.github.io/repo-name</code>). It can take a few minutes for the site to appear.</li>
      </ol>
      <p><em>Tip: Make sure your repository is public. GitHub Pages don’t work with private repos unless you have a paid plan.</em></p>
    </section>

    <section id="upload" class="content-section">
      <h2>4. Uploading Your Project Files</h2>
      <p>If you don’t want to use Git and command line, you can upload your files directly on GitHub:</p>
      <ol>
        <li>Open your GitHub repository in your browser.</li>
        <li>Click on <strong>Add file</strong> &gt; <strong>Upload files</strong>.</li>
        <li>Drag and drop your website files including <code>index.html</code>, CSS, and JS files.</li>
        <li>Scroll down and write a commit message like “Add site files”.</li>
        <li>Click <strong>Commit changes</strong> to save and publish your site.</li>
      </ol>
      <p><em>Tip: Make sure you have an <code>index.html</code> in the root — this is the main entry point for your site.</em></p>
    </section>

    <section id="vue" class="content-section">
      <h2>5. Deploying a Vue Project (with Vite)</h2>
      <p>Deploying Vue projects that use Vite requires a few extra steps. Here’s a beginner-friendly guide:</p>

      <h3>🚀 A. For Vue (Vite) Projects</h3>
      <ol>
        <li>Create a GitHub repository for your project: <a href="https://github.com/new" target="_blank" rel="noopener">https://github.com/new</a></li>
        <li>
          Push your Vue project to GitHub using Git commands:
          <pre><code>git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main</code></pre>
        </li>
        <li>
          Modify <code>vite.config.js</code> to set the <code>base</code> path. This is important so that the app loads correctly from GitHub Pages, which hosts the site in a subfolder:
          <pre><code>import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/your-repo-name/',
  plugins: [vue()]
})</code></pre>
          <p><em>Replace <code>your-repo-name</code> with your actual GitHub repo name.</em></p>
        </li>
        <li>Install the GitHub Pages deployment package:</li>
        <pre><code>npm install gh-pages --save-dev</code></pre>
        <li>
          Add a deploy script to your <code>package.json</code>:
          <pre><code>"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "vite build && gh-pages -d dist"
}</code></pre>
        </li>
        <li>Run deployment:</li>
        <pre><code>npm run deploy</code></pre>
      </ol>
      <p>
        Your Vue app will now be published at:<br />
        <code>https://yourusername.github.io/your-repo-name/</code>
      </p>

      <h3>🌐 Example Project</h3>
      <ul>
        <li>
          GitHub Repo: 
          <a href="https://github.com/hameedrauf/freecoursevueprojectorange" target="_blank" rel="noopener">
            github.com/hameedrauf/freecoursevueprojectorange
          </a>
        </li>
        <li>
          Live Site: 
          <a href="https://freecoursevueprojectorange.netlify.app" target="_blank" rel="noopener">
            freecoursevueprojectorange.netlify.app
          </a>
        </li>
      </ul>

      <hr />

      <h3>🧾 B. For Static HTML/CSS/JS Projects</h3>
      <p>If your project is just HTML, CSS, and JavaScript files (no build step), deploy like this:</p>
      <ol>
        <li>Create a GitHub repo and upload your files, including <code>index.html</code>.</li>
        <li>Go to <strong>Settings &gt; Pages</strong>.</li>
        <li>Select the <code>main</code> branch and root folder for the source.</li>
        <li>Click <strong>Save</strong> and visit your site at <code>https://yourusername.github.io/your-repo-name</code>.</li>
      </ol>
    </section>

    <section id="troubleshoot" class="content-section">
      <h2>6. Common Issues & Fixes</h2>
      <ul>
        <li><strong>My site isn't showing up or is blank?</strong> Wait a few minutes — GitHub Pages sometimes takes time to publish. Also, try hard refresh: Ctrl + Shift + R.</li>
        <li><strong>Getting 404 errors on resources?</strong> Double-check your <code>base</code> setting in <code>vite.config.js</code> matches your repo name exactly (with trailing slash).</li>
        <li><strong>Custom domain isn’t working?</strong> Make sure you have a <code>CNAME</code> file in your repo with your domain name and that DNS settings point to GitHub.</li>
        <li><strong>Files not updating?</strong> Confirm you committed and pushed your changes to the <code>main</code> branch.</li>
        <li><strong>Deployment command fails?</strong> Try reinstalling <code>gh-pages</code> package or deleting and recreating the repository.</li>
      </ul>
      <p><em>Using GitHub Pages is easy once you get the hang of it — keep trying and learning!</em></p>
    </section>

    <section id="resources" class="content-section">
      <h2>7. Helpful Resources</h2>
      <ul>
        <li><a href="https://pages.github.com/" target="_blank" rel="noopener">GitHub Pages Official Documentation</a></li>
        <li><a href="https://vitejs.dev/guide/static-deploy.html" target="_blank" rel="noopener">Vite Static Deploy Guide</a></li>
        <li><a href="https://www.freecodecamp.org/news/git-and-github-crash-course/" target="_blank" rel="noopener">Git and GitHub Crash Course</a></li>
        <li><a href="https://github.com/tschaub/gh-pages" target="_blank" rel="noopener">gh-pages npm Package Repository</a></li>
        <li><a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages" target="_blank" rel="noopener">GitHub Pages Beginner Guide</a></li>
      </ul>
    </section>
  </div>
    <FooterVue></FooterVue>
</template>

<script>
import FooterVue from "../../components/Footer.vue";

export default {
  name: 'GithubPagesPage',
  components:{
    FooterVue
  }
}
</script>

<style scoped>
.github-pages {
  max-width: 960px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

/* Hero Section */
.hero {
  background: linear-gradient(to right, #0ea5e9, #3b82f6);
  padding: 2rem;
  color: white;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.toc li{
  list-style-type: none;
}
/* Table of Contents */
.toc ul {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* slightly wider */
}
.toc a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background:  #f0f9ff;
  color:  #0ea5e9;
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border-left: 5px solid  #0ea5e9;
  white-space: nowrap; /* 🚫 Prevents breaking mid-line */
  overflow: hidden;
  text-overflow: ellipsis; /* Optional: ellipsis if it overflows */
}
.toc a:hover {
  background-color: #bae6fd;
  text-decoration: underline;
}

/* Content Sections */
.content-section {
  margin-top: 2rem;
  line-height: 1.6;
}
.content-section h2 {
  color: #0ea5e9;
  margin-bottom: 0.75rem;
  border-left: 4px solid #0ea5e9;
  padding-left: 0.5rem;
}

/* Code blocks */
pre {
  background: #f8f8f8;
  padding: 1rem;
  overflow-x: auto;
  border-left: 4px solid #0ea5e9;
  border-radius: 4px;
  font-size: 0.95rem;
  margin-top: 1rem;
  font-family: monospace;
  color: #2563eb;
}
code {
  font-family: monospace;
  color: #2563eb;
}

</style>
