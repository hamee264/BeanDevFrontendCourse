<template>
  <div class="css-topic-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Learn CSS (Cascading Style Sheets)</h1>
      <p>Style your websites with elegance, responsiveness, and structure using CSS.</p>
    </section>

    <!-- Table of Contents -->
    <section class="toc">
      <h2>Table of Contents</h2>
      <ul>
        <li><a href="#history">1. History of CSS</a></li>
        <li><a href="#uses">2. Uses of CSS</a></li>
        <li><a href="#advantages">3. Advantages</a></li>
        <li><a href="#disadvantages">4. Disadvantages</a></li>
        <li><a href="#what">5. What is CSS?</a></li>
        <li><a href="#TypesOfCss">6. Types Of Css</a></li>
        <li><a href="#syntax">7. CSS Syntax</a></li>
        <li><a href="#selectors">8. Selectors</a></li>
        <li><a href="#colors">9. Colors and Units</a></li>
        <li><a href="#box-model">10. Box Model</a></li>
        <li><a href="#layout">11. Layout (Flexbox & Grid)</a></li>
        <li><a href="#typography">12. Fonts & Text Styling</a></li>
        <li><a href="#responsive">13. Responsive Design</a></li>
        <li><a href="#animation">14. Transitions & Animations</a></li>
        <li><a href="#resources">15. Resources</a></li>
      </ul>
    </section>

    <!-- History -->
    <section id="history" class="content-section">
      <h2>1. History of CSS</h2>
      <p>CSS was first proposed in 1994 by Håkon Wium Lie while working at CERN, to separate content (HTML) from presentation (styles). It quickly became a W3C standard.</p>
      <p>Before CSS, developers used inline styles or HTML tags like <code>&lt;font&gt;</code>, making maintenance difficult. CSS introduced reusable, scalable design.</p>
      <p>Over time, CSS evolved with modules such as Flexbox, Grid, animations, and responsive layout support.</p>
      <p><em>Understanding CSS history helps you grasp why it's structured the way it is today.</em></p>
    </section>

    <!-- Uses -->
    <section id="uses" class="content-section">
      <h2>2. Uses of CSS</h2>
      <ul>
        <li><strong>Color & Typography:</strong> Style fonts, text, backgrounds, and readability.</li>
        <li><strong>Layout Control:</strong> Position elements on screen—static, flex, grid, floats, absolute.</li>
        <li><strong>Responsive Design:</strong> Adapt layouts to mobile/tablet/desktop.</li>
        <li><strong>Visual Effects:</strong> Transitions, animations, shadows, hover effects, transformations.</li>
        <li><strong>Conditional Styling:</strong> Use pseudo-classes and media queries for dynamic changes.</li>
        <li><strong>Interactive Components:</strong> Style forms, buttons, modals, and dropdowns for usability.</li>
      </ul>
    </section>

    <!-- Advantages -->
    <section id="advantages" class="content-section">
      <h2>3. Advantages of CSS</h2>
      <ul>
        <li><strong>Separation of Concerns:</strong> HTML for structure, CSS for presentation—clean code.</li>
        <li><strong>Global Style Management:</strong> One stylesheet covers the whole site.</li>
        <li><strong>Faster Page Loads:</strong> Cached CSS speeds up navigation.</li>
        <li><strong>Responsive Capabilities:</strong> Media queries allow flexible designs.</li>
        <li><strong>Rich Visuals:</strong> CSS alone can produce animations and effects efficiently.</li>
      </ul>
    </section>

    <!-- Disadvantages -->
    <section id="disadvantages" class="content-section">
      <h2>4. Disadvantages of CSS</h2>
      <ul>
        <li><strong>Browser Inconsistencies:</strong> Legacy browsers may behave unpredictably.</li>
        <li><strong>Specificity Battles:</strong> Complex selectors can cause override issues.</li>
        <li><strong>Scalability Challenges:</strong> Growing CSS needs structure (BEM, SMACSS).</li>
        <li><strong>Debugging Difficulties:</strong> Determining which style applies can be non‑trivial.</li>
      </ul>
      <p><em>Tools like dev tools, preprocessors, and methodologies help overcome these challenges.</em></p>
    </section>

    <!-- Remaining dynamic sections -->
    <section v-for="(section, index) in sections" :id="section.id" :key="section.id" class="content-section">
      <h2>{{ index + 5 }}. {{ section.title }}</h2>
      <div v-html="section.content"></div>
    </section>

    <!-- Outro -->
    <section class="outro">
      <p>With this foundation, you're ready to apply CSS creatively—next step: JavaScript to make your pages interactive!</p>
    </section>


  </div>
      <FooterVue />
</template>

<script setup>
import FooterVue from '../../components/Footer.vue';

const sections = [
  {
    id: 'what',
    title: 'What is CSS?',
    content: `
      <p><strong>CSS (Cascading Style Sheets)</strong> is a language used to define how HTML elements are displayed on a web page. It controls layout, colors, typography, spacing, and visual effects. It enables responsive, accessible, and well‑styled websites.</p>
      <p>For example:</p>
      <pre><code>h1 {
  color: #2F80ED;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}</code></pre>
    `
  },
  {
    id: 'TypesOfCss',
    title: 'Types of CSS',
    content: `
      <p>CSS can be applied in three ways:</p>
      <ul>
        <li><strong>Inline CSS</strong> — styles appear in the HTML tag (not reusable): <code>\<p style="color:red;"\>Hello\</p\></code></li>
        <li><strong>Internal CSS</strong> — styles within a <code>&lt;style&gt;</code> block in your HTML file.</li>
        <li><strong>External CSS</strong> — best practice: a separate <code>.css</code> file linked via <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>.</li>
      </ul>
    `
  },
  {
    id: 'syntax',
    title: 'CSS Syntax',
    content: `
      <p>CSS uses selectors and declarations:</p>
      <pre><code>selector {
  property: value;
}</code></pre>
      <p><em>Example:</em></p>
      <pre><code>button.primary {
  background-color: #2563eb;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
}</code></pre>
    `
  },
  {
    id: 'selectors',
    title: 'Selectors',
    content: `
      <p>Use CSS selectors to target elements:</p>
      <ul>
        <li><code>p</code> — all &lt;p&gt; tags</li>
        <li><code>.btn</code> — elements with class "btn"</li>
        <li><code>#main</code> — element with ID "main"</li>
        <li>Combinators: <code>ul > li</code> selects direct children</li>
        <li>Pseudo-classes: <code>a:hover</code>, <code>li:nth-child(2)</code></li>
      </ul>
    `
  },
  {
    id: 'colors',
    title: 'Colors & Units',
    content: `
      <p>CSS supports:</p>
      <pre><code>color: #ff6347;      /* HEX */
color: rgb(255,99,71);  /* RGB */
color: hsl(9,100%,64%); /* HSL */</code></pre>
      <p>Units for size:</p>
      <ul>
        <li><code>px</code> — fixed pixels</li>
        <li><code>%</code> — relative to parent width/height</li>
        <li><code>em</code>/<code>rem</code> — relative to font sizing</li>
        <li><code>vh</code>/<code>vw</code> — viewport-relative units</li>
      </ul>
    `
  },
  {
    id: 'box-model',
    title: 'Box Model',
    content: `
      <p>Every element is a box of:</p>
      <ul>
        <li><strong>Content</strong>: the inner text or image</li>
        <li><strong>Padding</strong>: space inside the element</li>
        <li><strong>Border</strong>: thickness around padding</li>
        <li><strong>Margin</strong>: space outside the border</li>
      </ul>
      <pre><code>div.card {
  padding: 1rem;
  border: 2px solid #ccc;
  margin: 1.5rem 0;
}</code></pre>
    `
  },
  {
    id: 'layout',
    title: 'Layout (Flexbox & Grid)',
    content: `
      <p><strong>Flexbox</strong> (linear layout):</p>
      <pre><code>.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code></pre>
      <p><strong>Grid</strong> (2D layout):</p>
      <pre><code>.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}</code></pre>
    `
  },
  {
    id: 'typography',
    title: 'Fonts & Text Styling',
    content: `
      <p>Common text properties:</p>
      <ul>
        <li><code>font-family: 'Segoe UI', sans-serif;</code></li>
        <li><code>font-size: 1rem;</code></li>
        <li><code>font-weight: 300 | 400 | 700;</code></li>
        <li><code>text-align: left | center | right;</code></li>
        <li><code>line-height: 1.5;</code></li>
      </ul>
      <p><em>Example:</em></p>
      <pre><code>h2 {
  font-family: 'Segoe UI';
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
}</code></pre>
    `
  },
  {
    id: 'responsive',
    title: 'Responsive Design',
    content: `
      <p>Use media queries:</p>
      <pre><code>@media (max-width: 768px) {
  .container {
    padding: 1rem;
    flex-direction: column;
  }
}</code></pre>
      <p>This makes layout adapt to mobile.</p>
    `
  },
  {
    id: 'animation',
    title: 'Transitions & Animations',
    content: `
      <p><strong>Transitions</strong> for smooth effects:</p>
      <pre><code>button {
  background-color: #2563eb;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #1e40af;
}</code></pre>
      <p><strong>Keyframe animations</strong>:</p>
      <pre><code>@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fade-in {
  animation: fadeIn 1s ease-in;
}</code></pre>
    `
  },
  {
    id: 'resources',
    title: 'Resources',
    content: `
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">MDN CSS Documentation</a></li>
        <li><a href="https://css-tricks.com/" target="_blank">CSS-Tricks</a></li>
        <li><a href="https://caniuse.com/" target="_blank">Can I Use… (browser support)</a></li>
      </ul>
    `
  }
];
</script>

<style scoped>
.css-topic-page {
  max-width: 980px;
  margin: auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  line-height: 1.7;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%);
  padding: 2.5rem 1rem;
  color: white;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(47, 128, 237, 0.3);
  margin-bottom: 2.5rem;
}
.hero h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}
.hero p {
  font-size: 1.25rem;
  opacity: 0.9;
}

/* Table of Contents */
.toc {
  background: #f0f7ff;
  padding: 1rem 1.2rem;
  border: 1px solid #a9d1ff;
  border-radius: 12px;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 12px rgba(47, 128, 237, 0.1);
}
.toc h2 {
  font-size: 1.6rem;
  color: #1e4ca1;
  margin-bottom: 1rem;
  font-weight: 700;
}
.toc li{
  list-style-type: none;
}
.toc ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  padding-left: 0;
  list-style: none;
}
.toc a {
  display: block;
  background-color: #cce6ff;
  color: #2f80ed;
  font-weight: 600;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.25s ease;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.toc a:hover {
  background-color: #99ccff;
  text-decoration: underline;
}

/* Content Sections */
.content-section {
  margin-top: 3rem;
}
.content-section h2 {
  font-size: 1.8rem;
  color: #2f80ed;
  margin-bottom: 1rem;
  border-left: 5px solid #2f80ed;
  padding-left: 0.8rem;
  font-weight: 700;
}
.content-section p,
.content-section ul {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #444;
}
.content-section ul {
  padding-left: 1.6rem;
}
.content-section ul li {
  margin-bottom: 0.45rem;
}

/* Code blocks */
pre {
  background: #e6f0ff;
  padding: 1rem 1.2rem;
  overflow-x: auto;
  border-left: 5px solid #2f80ed;
  border-radius: 6px;
  font-size: 0.95rem;
  margin: 1.2rem 0;
  font-family: 'Fira Code', monospace;
  color: #1c4a99;
}
code {
  font-family: 'Fira Code', monospace;
  color: #1c4a99;
}

/* Outro */
.outro {
  text-align: center;
  font-weight: 600;
  margin-top: 4rem;
  background-color: #cce6ff;
  padding: 1.8rem 1.2rem;
  border-radius: 10px;
  font-size: 1.2rem;
  color: #222;
  box-shadow: 0 4px 10px rgba(47, 128, 237, 0.1);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

</style>
