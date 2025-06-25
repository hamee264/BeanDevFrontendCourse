<template>
  <div class="example-page">
    <h1 class="page-title">Frontend Code Examples</h1>

    <!-- Filter buttons -->
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="currentTab = tab"
        :class="['tab-btn', currentTab === tab ? 'active' : '']"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Examples -->
    <div
      v-for="example in filteredExamples"
      :key="example.id"
      class="example-card"
    >
      <h2 class="example-title">{{ example.title }}</h2>

      <div class="live-demo" :class="{ editing: showEditor[example.id] }">
        <h3 class="live-label">Live Demo:</h3>

        <!-- For JavaScript using Vue component -->
        <component
          :is="example.component || 'div'"
          v-if="example.type === 'JavaScript' && example.component"
        />

        <!-- For HTML or CSS -->
        <template v-else>
          <div v-if="showEditor[example.id]" class="edit-mode-container">
            <div class="live-preview" v-html="editableCode[example.id]"></div>
            <textarea
              v-model="editableCode[example.id]"
              class="code-editor"
              spellcheck="false"
            ></textarea>
          </div>
          <div v-else class="demo-output" v-html="example.live"></div>
        </template>
      </div>

      <!-- Buttons -->
      <div class="action-buttons">
        <button @click="toggleCode(example.id)" class="toggle-btn">
          {{ showCode[example.id] ? 'Hide' : 'Show' }} Code
        </button>
        <button @click="copyCode(example.code)" class="copy-btn">Copy Code</button>
        <button
          v-if="example.type === 'HTML' || example.type === 'CSS'"
          @click="toggleEditor(example.id)"
          class="edit-btn"
        >
          {{ showEditor[example.id] ? 'Hide' : 'Edit' }} Code
        </button>
      </div>

      <!-- Code display or editor -->
      <pre v-if="showCode[example.id]" class="code-block"><code>{{ example.code }}</code></pre>
    </div>
  </div>
  <FooterVue></FooterVue>
</template>

<script setup>
import FooterVue from '../components/Footer.vue'
import { ref, reactive, computed, defineComponent } from 'vue'

const tabs = ['HTML', 'CSS', 'JavaScript']
const currentTab = ref('HTML')
const showCode = reactive({})
const showEditor = reactive({})
const editableCode = reactive({})

const examples = [
  {
    id: 1,
    type: 'HTML',
    title: 'Simple HTML Button',
    live: `<button class="html-btn">Click Me</button>`,
    code: `<button class="html-btn">Click Me</button>`,
  },
  {
    id: 2,
    type: 'HTML',
    title: 'HTML Form Example',
    live: `<form><input type="text" placeholder="Your name" /><button type="submit">Send</button></form>`,
    code: `<form>
  <input type="text" placeholder="Your name" />
  <button type="submit">Send</button>
</form>`,
  },
  {
    id: 3,
    type: 'CSS',
    title: 'Styled Div Box',
    live: `<div class="box">Hello CSS!</div>`,
    code: `.box {
  padding: 20px;
  background-color: #facc15;
  color: black;
  border-radius: 8px;
  text-align: center;
}`,
  },
  {
    id: 4,
    type: 'CSS',
    title: 'CSS Badge',
    live: `<span class="badge">New</span>`,
    code: `.badge {
  background-color: #10b981;
  color: white;
  padding: 4px 8px;
  border-radius: 9999px;
}`,
  },
  {
    id: 5,
    type: 'JavaScript',
    title: 'Simple Alert on Click',
    code: `document.getElementById('alert-btn').onclick = () => alert('Hello from JavaScript!')`,
    component: defineComponent({
      template: `<button @click="showAlert" class="alert-btn">Click Me</button>`,
      methods: {
        showAlert() {
          alert('Hello from JavaScript!')
        }
      }
    }),
  }
]

const filteredExamples = computed(() => examples.filter(e => e.type === currentTab.value))

function toggleCode(id) {
  showCode[id] = !showCode[id]
}

function toggleEditor(id) {
  showEditor[id] = !showEditor[id]
  if (!editableCode[id]) {
    const example = examples.find(e => e.id === id)
    editableCode[id] = example.code
  }
}

async function copyCode(code) {
  try {
    await navigator.clipboard.writeText(code)
    alert('Code copied!')
  } catch {
    alert('Copy failed.')
  }
}
</script>

<style>
/* Layout and typography */
.example-page {
  max-width: 768px;
  margin: 2rem auto;
  padding: 1.5rem;
  font-family: Arial, sans-serif;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

/* Tabs */
.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tab-btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: #e5e7eb;
  color: #374151;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.tab-btn.active {
  background-color: #2563eb;
  color: white;
}

/* Example card */
.example-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.example-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.live-demo {
  padding: 1rem;
  margin-bottom: 1rem;
}

.live-demo.editing .edit-mode-container {
  display: flex;
  gap: 1rem;
  border: 1px solid #2563eb;
  border-radius: 8px;
  background-color: #f0f9ff;
  padding: 1rem;
}

/* Live preview area */
.live-preview {
  flex: 1;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 1rem;
  min-height: 150px;
  overflow: auto;
  box-shadow: 0 0 8px rgba(37, 99, 235, 0.3);
}

/* Code editor textarea */
.code-editor {
  flex: 1;
  min-height: 150px;
  font-family: 'Fira Mono', monospace, monospace;
  font-size: 0.9rem;
  padding: 1rem;
  border: 1px solid #2563eb;
  border-radius: 6px;
  background: #fefefe;
  color: #1f2937;
  resize: vertical;
  box-shadow: 0 0 8px rgba(37, 99, 235, 0.6);
  transition: box-shadow 0.3s ease;
}
.code-editor:focus {
  outline: none;
  box-shadow: 0 0 10px #2563eb;
}

/* Regular live demo style when not editing */
.live-demo:not(.editing) .demo-output {
  background: #ffffff;
  padding: 1rem;
  border: 1px solid #2563eb;
  border-radius: 8px;
  min-height: 120px;
  box-shadow: 0 0 6px rgba(37, 99, 235, 0.3);
  transition: background-color 0.3s ease;
}

/* Label style update */
.live-label {
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #2563eb;
}

/* Buttons */
.action-buttons {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.toggle-btn {
  background-color: #d1d5db;
  color: #1f2937;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

.copy-btn {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

.edit-btn {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

/* Specific Components */
.hover-btn {
  padding: 8px 12px;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.hover-btn:hover {
  background-color: #059669;
}

.html-btn {
  padding: 8px 12px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
}

.alert-btn {
  padding: 8px 14px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.alert-btn:hover {
  background-color: #1e40af;
}

.image-caption {
  text-align: center;
}

/* Code block */
.code-block {
  background-color: #1f2937;
  color: #a7f3d0;
  padding: 1rem;
  border-radius: 8px;
  white-space: pre-wrap;
  overflow-x: auto;
  font-size: 0.875rem;
}
</style>
