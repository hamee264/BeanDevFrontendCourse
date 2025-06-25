<template>
  <div>
    <!-- Large screen navbar -->
    <nav class="navbar navbar-large">
      <div class="container">
        <div class="logo">
          <h3>BeanDev Frontend Courses</h3>
        </div>
        <ul>
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li class="dropdown">
            <span class="dropdown-label">Courses</span>
            <div class="drop-items">
              <router-link to="/topics/html" class="nav-link">HTML</router-link>
              <router-link to="/topics/css" class="nav-link">CSS</router-link>
              <router-link to="/topics/javascript" class="nav-link">JavaScript</router-link>
              <router-link to="/topics/version-control" class="nav-link">Version Control</router-link>
              <router-link to="/topics/frameworks" class="nav-link">Frameworks</router-link>
              <router-link to="/topics/build-tools" class="nav-link">Build Tools</router-link>
            </div>
          </li>
          <li><router-link to="/tutorials" class="nav-link">Tutorials</router-link></li>
          <li><router-link to="/examples" class="nav-link">Examples</router-link></li>
          <li><router-link to="/glossaries" class="nav-link">Glossaries</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- Small screen navbar -->
    <nav class="navbar navbar-small">
      <div class="container">
        <div class="logo">
          <h3> Frontend Courses</h3>
        </div>
        <button class="hamburger" @click="toggleMenu" :aria-expanded="menuOpen" aria-label="Toggle menu">
          <span :class="{ open: menuOpen }"></span>
          <span :class="{ open: menuOpen }"></span>
          <span :class="{ open: menuOpen }"></span>
        </button>
      </div>

      <div class="overlay" v-show="menuOpen" @click="closeMenu"></div>

      <div class="sidebar" :class="{ open: menuOpen }">
        <ul class="mobile-menu">
          <li><router-link to="/" class="nav-link" @click="closeMenu">Home</router-link></li>
          <li>
            <div class="mobile-dropdown-header" @click="toggleDropdown">
              Courses
              <span class="arrow" :class="{ open: dropdownOpen }">&#9662;</span>
            </div>
            <div v-show="dropdownOpen" class="drop-items-mobile">
              <router-link to="/topics/html" class="nav-link" @click="closeMenu">HTML</router-link>
              <router-link to="/topics/css" class="nav-link" @click="closeMenu">CSS</router-link>
              <router-link to="/topics/javascript" class="nav-link" @click="closeMenu">JavaScript</router-link>
              <router-link to="/topics/version-control" class="nav-link" @click="closeMenu">Version Control</router-link>
              <router-link to="/topics/frameworks" class="nav-link" @click="closeMenu">Frameworks</router-link>
              <router-link to="/topics/build-tools" class="nav-link" @click="closeMenu">Build Tools</router-link>
            </div>
          </li>
          <li><router-link to="/tutorials" class="nav-link" @click="closeMenu">Tutorials</router-link></li>
          <li><router-link to="/examples" class="nav-link" @click="closeMenu">Examples</router-link></li>
          <li><router-link to="/glossaries" class="nav-link" @click="closeMenu">Glossaries</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      dropdownOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (!this.menuOpen) this.dropdownOpen = false;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeMenu() {
      this.menuOpen = false;
      this.dropdownOpen = false;
    },
  },
};
</script>

<style scoped>
/* ✅ Your existing styles remain untouched */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  width: 100%;
  background: #ffffff;
  color: #111;
  z-index: 1000;
  border-bottom: 1px solid #eee;
  /* position: fixed; */
  top: 0;
  left: 0;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.logo h3 {
  font-size: 1.6rem;
  color: #111;
  cursor: default;
  user-select: none;
}

.navbar-large ul {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.navbar-large .nav-link {
  text-decoration: none;
  color: #111;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.25s ease, background-color 0.25s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  user-select: none;
}

.navbar-large .nav-link:hover,
.navbar-large .nav-link.router-link-exact-active {
  color: #fff;
  background-color: #007BFF;
  box-shadow: 0 2px 8px rgb(0 123 255 / 0.4);
}

.dropdown {
  position: relative;
}
.dropdown-label {
  cursor: default;
  font-weight: 600;
  user-select: none;
}
.drop-items {
  position: absolute;
  top: 100%;
  left: 0;
  background: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  display: none;
  flex-direction: column;
  min-width: 180px;
  border-radius: 5px;
  z-index: 999;
  padding: 0.25rem 0;
  transition: opacity 0.3s ease;
}
.dropdown:hover .drop-items {
  display: flex;
}
.drop-items .nav-link {
  padding: 0.75rem 1.25rem;
  color: #111;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.drop-items .nav-link:hover,
.drop-items .nav-link.router-link-exact-active {
  background: #007BFF;
  color: #fff;
}

.navbar-small {
  display: none;
  flex-direction: column;
  position: relative;
}
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  width: 28px;
  height: 22px;
  justify-content: center;
  background: transparent;
  border: none;
}
.hamburger span {
  height: 3px;
  width: 100%;
  background: #111;
  border-radius: 2px;
  transition: 0.3s ease;
}
.hamburger span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.sidebar {
  position: fixed;
  top: 0;
  left: -260px;
  width: 250px;
  height: 100vh;
  background: #fff;
  border-right: 1px solid #ddd;
  transition: left 0.3s ease;
  z-index: 1001;
  padding-top: 60px;
  box-shadow: 3px 0 6px rgb(0 0 0 / 0.1);
  user-select: none;
}
.sidebar.open {
  left: 0;
}
.mobile-menu {
  list-style: none;
}
.mobile-menu li {
  border-bottom: 1px solid #eee;
}
.mobile-menu .nav-link {
  display: block;
  padding: 1rem 1.25rem;
  color: #111;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.mobile-menu .nav-link:hover,
.mobile-menu .nav-link.router-link-exact-active {
  background: #007BFF;
  color: #fff;
}

.mobile-dropdown-header {
  padding: 1rem 1.25rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  color: #111;
  user-select: none;
}
.arrow {
  transition: transform 0.3s ease;
  font-size: 1rem;
  line-height: 1;
}
.arrow.open {
  transform: rotate(180deg);
}
.drop-items-mobile {
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 6px 6px;
  overflow: hidden;
}
.drop-items-mobile .nav-link {
  padding: 0.75rem 1.75rem;
  color: #111;
  cursor: pointer;
}
.drop-items-mobile .nav-link:hover,
.drop-items-mobile .nav-link.router-link-exact-active {
  background: #007BFF;
  color: #fff;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

@media (max-width: 768px) {
  .navbar-large {
    display: none;
  }
  .navbar-small {
    display: flex;
    flex-direction: column;
  }
  .navbar-small .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}

@media (min-width: 769px) {
  .navbar-large {
    display: block;
  }
  .navbar-small {
    display: none;
  }
}
</style>
