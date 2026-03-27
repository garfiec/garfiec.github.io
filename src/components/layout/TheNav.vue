<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'work-experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const activeSection = ref('about')
const isSticky = ref(false)
const mobileMenuOpen = ref(false)

let ticking = false
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      isSticky.value = window.scrollY > window.innerHeight - 60

      // Scroll spy - find which section is in view
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const navItem = navItems[i]
        if (section && navItem && section.offsetTop <= scrollPosition) {
          activeSection.value = navItem.id
          break
        }
      }
      ticking = false
    })
    ticking = true
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Mobile Navigation -->
  <nav class="mobile-nav-container" aria-label="Mobile navigation">
    <button
      class="mobile-nav-icon"
      aria-label="Toggle navigation menu"
      :aria-expanded="mobileMenuOpen"
      @click="toggleMobileMenu"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
    <ul class="mobile-nav" :class="{ open: mobileMenuOpen }">
      <li v-for="item in navItems" :key="item.id">
        <a
          :href="`#${item.id}`"
          class="link"
          :class="{ active: activeSection === item.id }"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>

  <!-- Desktop Navigation -->
  <nav aria-label="Main navigation" :class="{ sticky: isSticky }">
    <div class="row">
      <ul class="main-nav">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="link"
            :class="{ active: activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
// Mobile Navigation
.mobile-nav-container {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 2px 2px $accent-color;
  z-index: 9999;

  @media only screen and (min-width: $tablet-width) {
    display: none;
  }
}

.mobile-nav-icon {
  float: right;
  display: inline-block;
  padding: 10px 20px;
  color: $text-light;
  font-size: 120%;
  cursor: pointer;
  background: none;
  border: none;
}

.mobile-nav {
  display: none;
  float: left;
  list-style: none;
  margin: 0;
  padding: 10px 0 10px 25px;
  width: 100%;

  &.open {
    display: block;
  }

  li {
    display: block;

    a {
      display: block;
      text-decoration: none;
      color: $text-light;
      border: 0;
      padding: 10px 0;
      font-size: 100%;
      transition: color $transition-fast;

      &:hover,
      &.active {
        color: $accent-color;
      }
    }
  }
}

// Desktop Navigation
nav {
  display: none;

  @media only screen and (min-width: $tablet-width) {
    display: block;
    background-color: $main;
    height: 50px;
    width: 100%;
    border-bottom: 3px solid $accent-color;
  }
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.main-nav {
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 10px;

  li {
    display: inline-block;
    margin-right: 40px;

    a {
      padding: 8px 0;
      color: $text-light;
      text-decoration: none;
      text-transform: uppercase;
      transition: color $transition-fast;
      font-size: 16px;

      &:hover,
      &.active {
        color: $accent-color;
      }
    }
  }
}
</style>
