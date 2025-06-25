<template>
  <div class="html-page">
    <!-- Section: Introduction -->
    <section class="intro">
      <h1>HTML (HyperText Markup Language)</h1>
      <p>
        HTML is the standard markup language used to create and structure content on the Web. It
        tells the browser how to display text, images, links, and other types of content. This
        tutorial covers everything from the basics to advanced topics like tables, forms, media,
        and APIs.
      </p>
    </section>

  <!-- Section: Table of Contents -->
<section class="toc">
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#history"><span>0.</span> History, Uses, Pros & Cons</a></li>
    <li><a href="#basics"><span>1.</span> HTML Basics</a></li>
    <li><a href="#elements"><span>2.</span> Elements & Structure</a></li>
    <li><a href="#attributes"><span>3.</span> Attributes</a></li>
    <li><a href="#headings"><span>4.</span> Headings & Paragraphs</a></li>
    <li><a href="#links"><span>5.</span> Links & Images</a></li>
    <li><a href="#lists"><span>6.</span> Lists</a></li>
    <li><a href="#tables"><span>7.</span> Tables</a></li>
    <li><a href="#forms"><span>8.</span> Forms & Input Types</a></li>
    <li><a href="#media"><span>9.</span> Media (Video & Audio)</a></li>
    <li><a href="#apis"><span>10.</span> Web APIs Overview</a></li>
    <li><a href="#resources"><span>11.</span> Resources & References</a></li>
  </ul>
</section>

    <!-- Section 0: History and Overview -->
<section id="history">
  <h2>0. History, Uses, Advantages & Disadvantages</h2>

  <h3>History of HTML</h3>
  <p>
    HTML (HyperText Markup Language) was invented by <strong>Tim Berners-Lee</strong> in 1991 while working at CERN. It was designed to format and link documents across a network, which laid the foundation for the modern World Wide Web.
  </p>
  <ul>
    <li><strong>1991:</strong> First version of HTML shared as a simple list of 18 elements.</li>
    <li><strong>1995:</strong> HTML 2.0 standardized by the IETF, supporting forms and basic structure.</li>
    <li><strong>1997–1999:</strong> HTML 3.2 and 4.01 introduced styling, scripting, and tables.</li>
    <li><strong>2014:</strong> HTML5 became the new standard, adding audio, video, canvas, and semantic tags.</li>
  </ul>

  <h3>Common Uses of HTML</h3>
  <ul>
    <li>📝 Structuring text, images, and links on webpages</li>
    <li>📄 Creating forms for user input</li>
    <li>🎥 Embedding videos, audio, maps, and other multimedia</li>
    <li>📱 Supporting responsive and accessible web design</li>
    <li>📊 Integrating APIs and JavaScript to create dynamic interfaces</li>
  </ul>

  <h3>Advantages of HTML</h3>
  <ul>
    <li>✅ <strong>Easy to learn:</strong> Beginner-friendly syntax with clear tag meanings.</li>
    <li>✅ <strong>Universally supported:</strong> Works across all browsers and devices.</li>
    <li>✅ <strong>Free & open:</strong> No licensing or setup costs.</li>
    <li>✅ <strong>Search-engine friendly:</strong> Allows semantic markup for better SEO.</li>
    <li>✅ <strong>Integrates easily:</strong> Works with CSS, JavaScript, and backend languages.</li>
  </ul>

  <h3>Disadvantages of HTML</h3>
  <ul>
    <li>⚠️ <strong>Static by default:</strong> HTML alone can’t create dynamic behavior—JavaScript is needed.</li>
    <li>⚠️ <strong>Limited styling:</strong> Needs CSS for proper layout and design.</li>
    <li>⚠️ <strong>Can be repetitive:</strong> Without templates or frameworks, pages can become hard to maintain.</li>
    <li>⚠️ <strong>No logic support:</strong> Can’t perform conditions or loops without JavaScript.</li>
  </ul>
</section>

    <!-- Section 1: HTML Basics -->
    <section id="basics">
      <h2>1. HTML Basics</h2>
      <p>
        HTML uses tags to structure content. These tags are written using angle brackets, like
        <code>&lt;tag&gt;</code>. Most tags have an opening and closing tag, such as
        <code>&lt;p&gt;This is a paragraph&lt;/p&gt;</code>. Tags can also have attributes that
        provide extra information.
      </p>
      <p>Here's what a simple HTML document looks like:</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;This is my first HTML page.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
      <p>
        The <code>&lt;!DOCTYPE html&gt;</code> declaration defines this document as an HTML5 page.
      </p>
    </section>

    <!-- Section 2: Elements & Structure -->
    <section id="elements">
      <h2>2. HTML Elements & Structure</h2>
      <p>
        HTML documents are made up of elements, which are building blocks of a web page. Each element
        has a specific purpose and can contain text, other elements, or nothing at all.
      </p>
      <ul>
        <li><code>&lt;div&gt;</code> – defines a block-level section</li>
        <li><code>&lt;span&gt;</code> – defines an inline section</li>
        <li><code>&lt;p&gt;</code> – defines a paragraph</li>
        <li><code>&lt;em&gt;</code> – italic text for emphasis</li>
        <li><code>&lt;strong&gt;</code> – bold text for importance</li>
      </ul>
    </section>

    <!-- Section 3: Attributes -->
    <section id="attributes">
      <h2>3. HTML Attributes</h2>
      <p>
        Attributes provide additional information about HTML elements. They are always specified in
        the opening tag.
      </p>
      <p>Common attributes include:</p>
      <ul>
        <li><code>href</code> – the URL for links</li>
        <li><code>src</code> – the source of images/media</li>
        <li><code>alt</code> – alternative text for images</li>
        <li><code>target</code> – where to open the linked document</li>
        <li><code>class</code> and <code>id</code> – used for styling and JavaScript</li>
      </ul>
      <pre><code>&lt;a href="https://example.com" target="_blank"&gt;Visit Example&lt;/a&gt;
&lt;img src="logo.png" alt="Company Logo"&gt;
</code></pre>
    </section>

    <!-- Section 4: Headings & Paragraphs -->
    <section id="headings">
      <h2>4. Headings & Paragraphs</h2>
      <p>
        HTML provides six levels of headings from <code>&lt;h1&gt;</code> to
        <code>&lt;h6&gt;</code>. The <code>&lt;h1&gt;</code> tag defines the most important heading,
        and <code>&lt;h6&gt;</code> defines the least.
      </p>
      <p>
        Paragraphs are written using the <code>&lt;p&gt;</code> tag. They are used for blocks of
        text.
      </p>
    </section>

    <!-- Section 5: Links & Images -->
    <section id="links">
      <h2>5. Links & Images</h2>
      <p>
        Use the <code>&lt;a&gt;</code> tag to create hyperlinks and the <code>&lt;img&gt;</code> tag
        to embed images.
      </p>
      <pre><code>&lt;a href="https://vuejs.org" target="_blank"&gt;Vue.js&lt;/a&gt;
&lt;img src="vue-logo.png" alt="Vue Logo"&gt;
</code></pre>
    </section>

    <!-- Section 6: Lists -->
    <section id="lists">
      <h2>6. Lists</h2>
      <p>HTML supports three main types of lists:</p>
      <ul>
        <li><code>&lt;ul&gt;</code> – unordered (bulleted) list</li>
        <li><code>&lt;ol&gt;</code> – ordered (numbered) list</li>
        <li><code>&lt;dl&gt;</code> – definition list, with <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code></li>
      </ul>
    </section>

    <!-- Section 7: Tables -->
    <section id="tables">
      <h2>7. Tables</h2>
      <p>
        Tables are used to organize data into rows and columns.
      </p>
      <pre><code>&lt;table border="1"&gt;
  &lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Age&lt;/th&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Alice&lt;/td&gt;&lt;td&gt;30&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Bob&lt;/td&gt;&lt;td&gt;25&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
</code></pre>
      <p>You can enhance tables with CSS:</p>
      <pre><code>table, th, td {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
}
</code></pre>
    </section>

    <!-- Section 8: Forms & Inputs -->
    <section id="forms">
      <h2>8. Forms & Input Types</h2>
      <p>
        HTML forms collect user input. Inputs can be text, email, checkboxes, dropdowns, etc.
      </p>
      <pre><code>&lt;form action="/submit" method="post"&gt;
  &lt;label&gt;Name: &lt;input type="text" name="name" required /&gt;&lt;/label&gt;
  &lt;label&gt;Email: &lt;input type="email" name="email" /&gt;&lt;/label&gt;
  &lt;label&gt;Gender:
    &lt;select name="gender"&gt;
      &lt;option&gt;Male&lt;/option&gt;
      &lt;option&gt;Female&lt;/option&gt;
    &lt;/select&gt;
  &lt;/label&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>
    </section>

    <!-- Section 9: Media -->
    <section id="media">
      <h2>9. Media: Video & Audio</h2>
      <p>
        You can embed videos and audios using the <code>&lt;video&gt;</code> and
        <code>&lt;audio&gt;</code> tags.
      </p>
      <pre><code>&lt;video controls width="300"&gt;
  &lt;source src="sample.mp4" type="video/mp4" /&gt;
  Your browser does not support the video tag.
&lt;/video&gt;

&lt;audio controls&gt;
  &lt;source src="sample.mp3" type="audio/mpeg" /&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;
</code></pre>
    </section>

    <!-- Section 10: Web APIs -->
    <section id="apis">
      <h2>10. Quick Overview: Web APIs</h2>
      <p>
        HTML can work with various browser APIs to enhance functionality:
      </p>
      <ul>
        <li>Geolocation API – get user location</li>
        <li>Drag & Drop API – draggable elements</li>
        <li>Web Storage API – store data locally</li>
        <li>Canvas & SVG – draw graphics</li>
      </ul>
    </section>

    <!-- Section 11: Resources -->
    <section id="resources">
      <h2>11. Resources & References</h2>
      <p>
        Learn more from:
        <a href="https://www.w3schools.com/tags/default.asp" target="_blank">HTML Tag Reference</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">MDN HTML Docs</a>,
        and <a href="https://www.freecodecamp.org/learn/" target="_blank">FreeCodeCamp</a>.
      </p>
    </section>

    <section class="outro">
      <p>Ready to build real websites? Continue to CSS & JavaScript for styling and interactivity!</p>
    </section>
  </div>
    <FooterVue></FooterVue>

</template>

<script setup>
import FooterVue from "../../components/Footer.vue";

</script>
<style scoped>
.html-page {
  max-width: 980px;
  margin: auto;
  padding: 2rem 1rem;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  color: #222;
  line-height: 1.8;
}

/* Hero Introduction */
.intro {
  background: linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%);
  padding: 2.5rem 1rem;
  color: #fff;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  margin-bottom: 3rem;
}
.intro h1 {
  font-size: 2.8rem;
  margin-bottom: 0.6rem;
  font-weight: 700;
}
.intro p {
  font-size: 1.25rem;
  opacity: 0.95;
}

/* Table of Contents */
.toc {
  background: #fff;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 2rem;
}
.toc h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}
.toc ul {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.toc a:hover {
  background-color: #cce4ff;   /* lighter highlight */
  text-decoration: underline;
}

/* Section layout */
section {
  margin-top: 3rem;
}
section h2 {
  font-size: 1.75rem;
  color: #2f80ed;               /* strong blue */
  margin-bottom: 1rem;
  border-left: 5px solid #2f80ed;
  padding-left: 0.75rem;
}

/* Lists */
ul {
  padding-left: 1.5rem;
}

/* Code blocks */
pre {
  background: #e6f0ff;           /* very light blue */
  padding: 1rem;
  overflow-x: auto;
  border-left: 4px solid #2f80ed; /* blue border */
  border-radius: 6px;
  font-size: 0.95rem;
  margin: 1.2rem 0;
}
code {
  font-family: 'Fira Code', monospace;
  color: #1c4a99;               /* dark blue text */
}

/* Outro */
.outro {
  margin-top: 4rem;
  text-align: center;
  padding: 2rem 1rem;
  background-color: #e6f0ff;    /* light sky blue background */
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.15rem;
  color: #444;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Optional smooth scroll */
html {
  scroll-behavior: smooth;
}

</style>
