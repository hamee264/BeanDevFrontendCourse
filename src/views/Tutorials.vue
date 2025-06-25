<template>
  <div class="tutorials-page">
    <!-- Hero -->
    <section class="hero">
      <h1>Frontend Video Tutorials</h1>
      <p>Learn HTML, CSS, JavaScript, Git, Vue, React, and Tailwind with curated videos.</p>
    </section>

    <!-- Fallback Grid -->
    <div v-if="!swiperAvailable" class="video-grid">
      <div v-for="video in allVideos" :key="video.youtubeId" class="video-card">
        <iframe :src="`https://www.youtube.com/embed/${video.youtubeId}`" frameborder="0" allowfullscreen></iframe>
        <div class="video-info">
          <h3>{{ video.title }}</h3>
          <p>{{ video.channel }}</p>
          <button @click="toggleWatchLater(video)" class="watch-later-btn">
            {{ isWatched(video) ? 'Remove from Watch Later' : 'Add to Watch Later' }}
          </button>
          <textarea v-model="notes[video.youtubeId]" placeholder="Your notes..." @input="saveNotes(video.youtubeId)"></textarea>
        </div>
      </div>
    </div>

    <!-- Swiper Carousels by Topic -->
    <section v-else v-for="(group, i) in videoGroups" :key="i" class="course-section">
      <h2>{{ group.topic }} Tutorials</h2>

      <Swiper
        :modules="[]"
        :slides-per-view="1"
        :space-between="20"
        :breakpoints="{640:{slidesPerView:1.2},768:{slidesPerView:2},1024:{slidesPerView:3}}"
        :speed="600"
        @swiper="swiper => onSwiper(swiper, i)"
        @init="onCreate"
        class="video-carousel"
      >
        <SwiperSlide v-for="vid in group.videos" :key="vid.youtubeId">
          <div class="video-card">
            <iframe
              :src="`https://www.youtube.com/embed/${vid.youtubeId}?enablejsapi=1`"
              :id="`video-${vid.youtubeId}`"
              frameborder="0"
              allowfullscreen
              @load="initializePlayer(vid.youtubeId)"
            ></iframe>
            <div class="video-info">
              <h3>{{ vid.title }}</h3>
              <p>{{ vid.channel }}</p>
              <button @click="toggleWatchLater(vid)" class="watch-later-btn">
                {{ isWatched(vid) ? 'Remove from Watch Later' : 'Add to Watch Later' }}
              </button>

              <form @submit.prevent="submitReview(vid.youtubeId, vid.name, vid.review, vid.reaction)" class="review-form">
                <input
                  v-model="vid.name"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <textarea
                  v-model="vid.review"
                  placeholder="Write your review..."
                  required
                ></textarea>
                <select v-model="vid.reaction" required>
                  <option disabled value="React" selected>React</option>
                  <option v-for="emoji in emojiReactions" :key="emoji" :value="emoji">{{ emoji }}</option>
                </select>
                <button type="submit" class="review-submit">Submit Review</button>
              </form>

              <button @click="openReviewModal(vid.youtubeId)" class="toggle-reviews">
                View All Reviews
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Navigation buttons -->
      <div class="custom-nav">
        <button @click="slidePrev(i)">Prev</button>
        <button @click="slideNext(i)">Next</button>
      </div>
    </section>

    <!-- Watch Later -->
    <section class="watch-later" v-if="watchLaterList.length">
      <h2>📌 Watch Later</h2>
      <ul>
        <li v-for="w in watchLaterList" :key="w.youtubeId">
          <a :href="`https://www.youtube.com/watch?v=${w.youtubeId}`" target="_blank">{{ w.title }}</a>
        </li>
      </ul>
    </section>

    <!-- Modal Popup for All Reviews -->
    <div v-if="allReviewsVisible" class="modal-overlay" @click.self="closeReviewModal">
      <div class="modal-content">
        <button class="close-modal" @click="closeReviewModal">×</button>
        <h3>All Reviews for {{ getVideoTitleById(selectedVideoId) }}</h3>
        <ul class="review-list">
          <li v-for="r in reviews[selectedVideoId] || []" :key="r.timestamp" class="review-item">
            <span class="avatar">{{ getInitials(r.name) }}</span>
            <div>
              <strong>{{ r.name }}</strong> <small>({{ formatTime(r.timestamp) }})</small>
              <p>{{ r.text }} <span class="reaction">{{ r.reaction }}</span></p>
            </div>
          </li>
          <li v-if="!(reviews[selectedVideoId] && reviews[selectedVideoId].length)">
            No reviews yet.
          </li>
        </ul>
      </div>
    </div>
   
  </div>
   <FooterVue></FooterVue>
</template>

<script setup>
import FooterVue from '../components/Footer.vue'
import { ref, reactive, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const swiperRefs = ref([])
const swiperAvailable = ref(true)
const watchLater = ref(JSON.parse(localStorage.getItem('watchLater') || '[]'))
const notes = reactive(JSON.parse(localStorage.getItem('notes') || '{}'))
const reviews = reactive(JSON.parse(localStorage.getItem('reviews') || '{}'))

const videoGroups = [
  {
    topic: 'HTML',
    videos: [
      { title: 'HTML Full Course – Build a Website', channel: 'freeCodeCamp.org', youtubeId: 'UB1O30fR-EE' },
      { title: 'HTML Crash Course', channel: 'Traversy Media', youtubeId: 'qz0aGYrrlhU' },
      { title: 'HTML in 100 Seconds', channel: 'Fireship', youtubeId: 'ok-plXXHlWw' },
      { title: 'HTML Tutorial for Beginners', channel: 'Programming with Mosh', youtubeId: 'qz0aGYrrlhU' },
      { title: 'HTML Basics', channel: 'The Net Ninja', youtubeId: 'N3KWD7Hjhpc' }
    ]
  },
  {
    topic: 'CSS',
    videos: [
      { title: 'CSS Tutorial – Zero to Hero', channel: 'SuperSimpleDev', youtubeId: 'OXGznpKZ_sA' },
      { title: 'CSS Crash Course', channel: 'Traversy Media', youtubeId: 'yfoY53QXEnI' },
      { title: 'CSS in 100 Seconds', channel: 'Fireship', youtubeId: '1PnVor36_40' },
      { title: 'CSS Full Course for Beginners', channel: 'freeCodeCamp.org', youtubeId: 'ieTHC78giGQ' },
      { title: 'CSS Flexbox Guide', channel: 'Kevin Powell', youtubeId: 'JJSoEo8JSnc' }
    ]
  },
  {
    topic: 'JavaScript',
    videos: [
      { title: 'JavaScript Full Course for Beginners', channel: 'Bro Code', youtubeId: 'jS4aFq5-91M' },
      { title: 'JS Crash Course', channel: 'Traversy Media', youtubeId: 'hdI2bqOjy3c' },
      { title: 'JavaScript in 100 Seconds', channel: 'Fireship', youtubeId: 'DHjqpvDnNGE' },
      { title: 'JS for Absolute Beginners', channel: 'freeCodeCamp.org', youtubeId: 'PkZNo7MFNFg' },
      { title: 'JavaScript DOM Tutorial', channel: 'The Net Ninja', youtubeId: '0ik6X4DJKCc' }
    ]
  },
  {
    topic: 'Git & GitHub',
    videos: [
      { title: 'Git & GitHub Crash Course', channel: 'Traversy Media', youtubeId: 'SWYqp7iY_Tc' },
      { title: 'Git Tutorial for Beginners', channel: 'freeCodeCamp.org', youtubeId: 'RGOj5yH7evk' },
      { title: 'Git in 100 Seconds', channel: 'Fireship', youtubeId: 'USjZcfj8yxE' },
      { title: 'GitHub for Beginners', channel: 'The Net Ninja', youtubeId: 'w3jLJU7DT5E' },
      { title: 'Learn Git in 20 Minutes', channel: 'Web Dev Simplified', youtubeId: 'MJUJ4wbFm_A' }
    ]
  },
  {
    topic: 'Vue.js',
    videos: [
      { title: 'Vue.js Full Course', channel: 'freeCodeCamp.org', youtubeId: 'FXpIoQ_rT_c' },
      { title: 'Vue 3 Crash Course', channel: 'Traversy Media', youtubeId: 'nhBVL41-_Cw' },
      { title: 'Vue in 100 Seconds', channel: 'Fireship', youtubeId: 'nhBVL41-_Cw' },
      { title: 'Vue Basics Tutorial', channel: 'The Net Ninja', youtubeId: 'z6hQqgvGI4Y' },
      { title: 'Vue 3 Composition API', channel: 'Academind', youtubeId: 'zX5tl6Z6LC0' }
    ]
  },
  {
    topic: 'React',
    videos: [
      { title: 'React JS Full Course', channel: 'freeCodeCamp.org', youtubeId: 'bMknfKXIFA8' },
      { title: 'React Crash Course', channel: 'Traversy Media', youtubeId: 'w7ejDZ8SWv8' },
      { title: 'React in 100 Seconds', channel: 'Fireship', youtubeId: 'Tn6-PIqc4UM' },
      { title: 'React Tutorial for Beginners', channel: 'Programming with Mosh', youtubeId: 'Ke90Tje7VS0' },
      { title: 'React Basics Tutorial', channel: 'The Net Ninja', youtubeId: 'EMfFdv1wos4' }
    ]
  },
  {
    topic: 'Tailwind CSS',
    videos: [
      { title: 'Tailwind CSS Full Course', channel: 'freeCodeCamp.org', youtubeId: 'dFgzHOX84xQ' },
      { title: 'Tailwind Crash Course', channel: 'Traversy Media', youtubeId: 'UBOj6rqRUME' },
      { title: 'Tailwind in 100 Seconds', channel: 'Fireship', youtubeId: '6zIuAyLZPH0' },
      { title: 'Tailwind Basics', channel: 'The Net Ninja', youtubeId: 'aXYGkYsccXU' },
      { title: 'Tailwind Tutorial (Beginner)', channel: 'Web Dev Simplified', youtubeId: 'pfaSUYaSgRo' }
    ]
  }
]

const allVideos = videoGroups.flatMap(g => g.videos)
const watchLaterList = watchLater.value

const emojiReactions = ['👍', '❤️', '🔥', '😂', '👏']

const allReviewsVisible = ref(false)
const selectedVideoId = ref(null)
const showReviews = reactive({}) // (Not used for modal, but could keep)

function onSwiper(swiper, index) {
  swiperRefs.value[index] = swiper
}

function slideNext(index) {
  swiperRefs.value[index]?.slideNext()
}
function slidePrev(index) {
  swiperRefs.value[index]?.slidePrev()
}

function onCreate(swiper) {
  if (!swiper) swiperAvailable.value = false
}

function toggleWatchLater(video) {
  const index = watchLater.value.findIndex(v => v.youtubeId === video.youtubeId)
  if (index >= 0) watchLater.value.splice(index, 1)
  else watchLater.value.push({ youtubeId: video.youtubeId, title: video.title })
  localStorage.setItem('watchLater', JSON.stringify(watchLater.value))
}

function isWatched(video) {
  return watchLater.value.some(v => v.youtubeId === video.youtubeId)
}

function saveNotes(id) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

watch(notes, () => {
  localStorage.setItem('notes', JSON.stringify(notes))
}, { deep: true })

function initializePlayer(id) {
  if (!document.getElementById('youtube-iframe-api')) {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    tag.id = 'youtube-iframe-api'
    document.body.appendChild(tag)
  }

  window.onYouTubeIframeAPIReady = () => {
    new window.YT.Player(`video-${id}`, {
      events: {
        onStateChange(event) {
          const iframe = document.getElementById(`video-${id}`)
          if (event.data === window.YT.PlayerState.PLAYING) {
            iframe.classList.add('fullscreen-video')
          } else if (
            event.data === window.YT.PlayerState.PAUSED ||
            event.data === window.YT.PlayerState.ENDED
          ) {
            iframe.classList.remove('fullscreen-video')
          }
        }
      }
    })
  }

  if (window.YT && window.YT.Player) window.onYouTubeIframeAPIReady()
}

function getVideoTitleById(id) {
  return allVideos.find(v => v.youtubeId === id)?.title || 'Untitled'
}

function submitReview(videoId, name, text, reaction) {
  if (!name.trim() || !text.trim() || !reaction) return

  const timestamp = new Date().toISOString()
  if (!reviews[videoId]) reviews[videoId] = []
  reviews[videoId].push({ name, text, reaction, timestamp })
  localStorage.setItem('reviews', JSON.stringify(reviews))

  // Clear input fields for that video
  const group = videoGroups.find(g => g.videos.some(v => v.youtubeId === videoId))
  if (group) {
    const video = group.videos.find(v => v.youtubeId === videoId)
    if (video) {
      video.name = ''
      video.review = ''
      video.reaction = ''
    }
  }
}

function formatTime(timestamp) {
  const d = new Date(timestamp)
  return d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })
}

function getInitials(name) {
  if (!name) return ''
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
}

function openReviewModal(videoId) {
  selectedVideoId.value = videoId
  allReviewsVisible.value = true
}

function closeReviewModal() {
  allReviewsVisible.value = false
}
</script>

<style scoped>
.tutorials-page {
  max-width: 1100px;
  margin: auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
}

.hero {
  background: linear-gradient(to right, #38bdf8, #60a5fa);
  padding: 2.5rem 1rem;
  text-align: center;
  border-radius: 16px;
  margin-bottom: 2.5rem;
  color: white;
  animation: fadeIn 1s ease-in-out;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero p {
  font-size: 1.2rem;
}

.course-section {
  margin-bottom: 4rem;
}

.course-section h2 {
  font-size: 1.6rem;
  color: #38bdf8;
  margin-bottom: 1rem;
  border-left: 5px solid #38bdf8;
  padding-left: 0.75rem;
  animation: slideInLeft 0.5s ease;
}

.video-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  padding: 10px;
}
.video-card:hover {
  transform: translateY(-5px);
}

iframe {
  width: 100%;
  height: 200px;
  border: none;
}

.video-info {
  padding: 1rem;
}

.video-info h3 {
  font-size: 1.1rem;
  color: #38bdf8;
  margin-bottom: 0.5rem;
}

.video-info p {
  font-size: 0.9rem;
  color: #666;
}

textarea {
  width: 100%;
  min-height: 60px;
  margin-top: 0.5rem;
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  resize: vertical;
}

input, textarea, select {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.review-submit {
  background: #38bdf8;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  margin-top: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.review-submit:hover {
  background: #0ea5e9;
}

.watch-later-btn {
  background: #38bdf8;
  color: white;
  font-size: 0.95rem;
  padding: 0.4rem 0.85rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-bottom: 0.6rem;
}

.watch-later-btn:hover {
  background: #0ea5e9;
}

.custom-nav {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 10px;
}

.custom-nav button {
  background: #38bdf8;
  color: white;
  font-size: 0.95rem;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.custom-nav button:hover {
  background: #0ea5e9;
}

.watch-later, .view-notes {
  margin-top: 3rem;
  border-top: 2px solid #38bdf8;
  padding-top: 1rem;
}

.watch-later h2,
.view-notes h2 {
  color: #38bdf8;
}

.watch-later ul,
.view-notes ul {
  list-style: none;
  padding: 0;
}

.watch-later li,
.view-notes li {
  margin-bottom: 0.5rem;
}

.video-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.toggle-reviews {
  margin-top: 0.5rem;
  background: transparent;
  border: none;
  color: #0ea5e9;
  cursor: pointer;
  font-size: 0.9rem;
}

.review-list {
  margin-top: 0.5rem;
  list-style: none;
  padding-left: 0;
  max-height: 60vh;
  overflow-y: auto;
}
.review-list li {
  padding: 0.4rem 0;
  border-bottom: 1px solid #eee;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #38bdf8;
  border: none;
  color: white;
  padding: 0.25rem 0.6rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

.review-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.avatar {
  background: #0ea5e9;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.reaction {
  font-size: 1.2rem;
  margin-left: 0.5rem;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>
