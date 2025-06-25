<template>
  <div class="glossary-page">
    <h1>Frontend Glossary</h1>
    <input
      v-model="search"
      type="text"
      placeholder="Search terms..."
      class="search-input"
    />

    <ul class="term-list">
      <li
        v-for="term in filteredTerms"
        :key="term.term"
        class="term-item"
      >
        <strong>{{ term.term }}</strong>: {{ term.definition }}
      </li>
      <li v-if="filteredTerms.length === 0">No results found.</li>
    </ul>
  </div>
  <FooterVue></FooterVue>
</template>

<script setup>
import FooterVue from '../components/Footer.vue'
import { ref, computed } from 'vue'

// Search keyword
const search = ref('')

// Example terms (you can expand this to 100+ by copying the objects)
const terms = [
 { term: 'Accessibility', definition: 'Designing interfaces usable by people with disabilities.' },
{ term: 'AJAX', definition: 'Asynchronous JavaScript and XML; used to update web pages without reloading.' },
{ term: 'Anchor Tag', definition: 'The <a> HTML element used to create hyperlinks.' },
{ term: 'Animation', definition: 'CSS or JS-based movement of HTML elements.' },
{ term: 'API', definition: 'Application Programming Interface; allows different systems to interact.' },
{ term: 'ARIA', definition: 'Accessible Rich Internet Applications; improves accessibility in HTML.' },
{ term: 'Attributes', definition: 'Extra information provided inside HTML tags (like class or id).' },
{ term: 'Backend', definition: 'The server-side of a web application, not seen by the user.' },
{ term: 'BEM', definition: 'Block Element Modifier; a naming convention for CSS classes.' },
{ term: 'Box Model', definition: 'Describes spacing around elements using margin, border, padding, and content.' },
{ term: 'Breakpoint', definition: 'Screen width at which the design changes for responsiveness.' },
{ term: 'CDN', definition: 'Content Delivery Network; serves files from distributed servers for faster access.' },
{ term: 'Class', definition: 'A CSS selector used to style one or more HTML elements.' },
{ term: 'CLI', definition: 'Command Line Interface; tool used to scaffold and manage frontend projects.' },
{ term: 'Client-side', definition: 'Code executed in the browser, not on the server.' },
{ term: 'CMS', definition: 'Content Management System like WordPress or Strapi.' },
{ term: 'Component', definition: 'Reusable, encapsulated piece of UI (common in Vue, React, etc).' },
{ term: 'Cookie', definition: 'Small data stored in the browser for session management.' },
{ term: 'CSS Grid', definition: 'Two-dimensional layout system for web content.' },
{ term: 'CSS Variables', definition: 'Custom properties defined in CSS for reuse.' },
{ term: 'Dark Mode', definition: 'User interface theme with dark background and light text.' },
{ term: 'Deployment', definition: 'Making a web app live on the internet.' },
{ term: 'DevTools', definition: 'Browser tools for debugging and inspecting web pages.' },
{ term: 'DOM', definition: 'Document Object Model; structured representation of the HTML page.' },
{ term: 'Dropdown', definition: 'A menu that shows/hides options when clicked.' },
{ term: 'Element', definition: 'An individual part of an HTML document, like <div> or <p>.' },
{ term: 'Em', definition: 'CSS unit relative to the font-size of the parent.' },
{ term: 'Event Listener', definition: 'Function that runs in response to user interactions like clicks.' },
{ term: 'Favicon', definition: 'Small icon shown in the browser tab.' },
{ term: 'Flexbox', definition: 'One-dimensional CSS layout model.' },
{ term: 'Font Family', definition: 'Set of fonts used to display text.' },
{ term: 'Form Validation', definition: 'Ensuring form input is correct before submission.' },
{ term: 'Framework', definition: 'Pre-built code libraries like Vue, React, Angular.' },
{ term: 'Frontend', definition: 'Everything the user interacts with in a web app.' },
{ term: 'Git', definition: 'Version control system for tracking code changes.' },
{ term: 'Grid System', definition: 'Layout structure based on rows and columns.' },
{ term: 'Hamburger Menu', definition: 'Three-line icon that opens navigation on small screens.' },
{ term: 'Head', definition: 'HTML section for metadata, title, links, etc.' },
{ term: 'Hero Section', definition: 'Prominent first section on a webpage, usually with a heading.' },
{ term: 'Hosting', definition: 'Providing storage space for a website on a server.' },
{ term: 'Hover State', definition: 'CSS effect when the user hovers over an element.' },
{ term: 'HTML5', definition: 'Latest version of HTML with new semantic elements.' },
{ term: 'HTTP', definition: 'Protocol used for data exchange on the web.' },
{ term: 'ID', definition: 'Unique identifier used in HTML and CSS.' },
{ term: 'JavaScript', definition: 'Programming language for web interactivity.' },
{ term: 'JSON', definition: 'JavaScript Object Notation; data format used in APIs.' },
{ term: 'Keyframe', definition: 'CSS animation rule defining a step in an animation.' },
{ term: 'Label', definition: 'HTML tag for describing form inputs.' },
{ term: 'Lazy Loading', definition: 'Delaying the loading of non-critical resources.' },
{ term: 'Link', definition: 'HTML element to reference CSS or other pages.' },
{ term: 'List', definition: 'HTML element like <ul> or <ol> for listing items.' },
{ term: 'Local Storage', definition: 'Browser storage for small amounts of data.' },
{ term: 'Margin', definition: 'Space outside an element’s border.' },
{ term: 'Media Query', definition: 'CSS technique for responsive design.' },
{ term: 'Modal', definition: 'Popup overlay that displays information or actions.' },
{ term: 'Navigation', definition: 'Menu or links for moving around a site.' },
{ term: 'NPM', definition: 'Node package manager for installing JS libraries.' },
{ term: 'Object', definition: 'JavaScript structure of key-value pairs.' },
{ term: 'Opacity', definition: 'CSS property for element transparency.' },
{ term: 'Padding', definition: 'Space between content and border of an element.' },
{ term: 'Parallax', definition: 'Effect where background moves slower than foreground.' },
{ term: 'Pixel', definition: 'Smallest unit of screen display.' },
{ term: 'Position', definition: 'CSS property to control how elements are positioned.' },
{ term: 'PostCSS', definition: 'Tool for transforming CSS with JavaScript plugins.' },
{ term: 'Pseudo-class', definition: 'Keyword added to selectors (like :hover).' },
{ term: 'React', definition: 'JavaScript library for building user interfaces.' },
{ term: 'Rem', definition: 'CSS unit relative to the root font size.' },
{ term: 'Responsive Design', definition: 'Design that adapts to various screen sizes.' },
{ term: 'Router', definition: 'Handles URL navigation in SPAs (Single Page Apps).' },
{ term: 'SASS', definition: 'CSS preprocessor with variables, mixins, and nesting.' },
{ term: 'Script', definition: 'JS code embedded into HTML using <script> tag.' },
{ term: 'Scrollbar', definition: 'UI element that enables scrolling.' },
{ term: 'Section', definition: 'HTML5 tag for grouping related content.' },
{ term: 'Selector', definition: 'CSS syntax to target HTML elements.' },
{ term: 'Semantic HTML', definition: 'Using HTML tags according to their meaning.' },
{ term: 'Session Storage', definition: 'Browser storage cleared when tab is closed.' },
{ term: 'Shadow DOM', definition: 'Scoped DOM tree used in Web Components.' },
{ term: 'Skeleton Loader', definition: 'Placeholder loading animation.' },
{ term: 'SPA', definition: 'Single Page Application where routing is handled client-side.' },
{ term: 'SRC', definition: 'HTML attribute that sets the source of an image or script.' },
{ term: 'SVG', definition: 'Scalable Vector Graphics for icons and illustrations.' },
{ term: 'Tag', definition: 'HTML element like <p>, <div>, <h1>, etc.' },
{ term: 'Tailwind CSS', definition: 'Utility-first CSS framework.' },
{ term: 'Template', definition: 'HTML-like structure in frameworks like Vue or Angular.' },
{ term: 'Text Shadow', definition: 'CSS property to apply shadow to text.' },
{ term: 'Transform', definition: 'CSS property to rotate, scale, skew elements.' },
{ term: 'Transition', definition: 'CSS for smooth change of properties.' },
{ term: 'TypeScript', definition: 'Typed superset of JavaScript for large projects.' },
{ term: 'UI', definition: 'User Interface; everything visible to users.' },
{ term: 'UX', definition: 'User Experience; overall feel and ease of use.' },
{ term: 'Validation', definition: 'Checking form inputs for correctness.' },
{ term: 'Variable', definition: 'Symbol for storing data in programming or CSS.' },
{ term: 'Vendor Prefix', definition: 'Browser-specific CSS prefix like -webkit-.' },
{ term: 'Viewport', definition: 'User’s visible area of a webpage.' },
{ term: 'Vue', definition: 'Progressive JavaScript framework for building UIs.' },
{ term: 'Webpack', definition: 'Module bundler for JavaScript applications.' },
{ term: 'White Space', definition: 'Empty area used to improve readability.' },
{ term: 'Z-index', definition: 'CSS property to stack elements vertically.' }

]

// Filtered list based on search
const filteredTerms = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return terms
  return terms.filter(t =>
    t.term.toLowerCase().includes(q) ||
    t.definition.toLowerCase().includes(q)
  )
})
</script>

<style>
.glossary-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  color: #2563eb; /* consistent with your theme */
}

.search-input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
}

.term-list {
  list-style: none;
  padding: 0;
}

.term-item {
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.term-item strong {
  color: #2563eb;
}
</style>
