<script setup lang="ts">
import { siteData } from '@/data/siteData'

const scrollToTop = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <a class="footer-up" href="#" aria-label="Scroll to top" @click.prevent="scrollToTop">
      <font-awesome-icon :icon="['fas', 'angle-double-up']" />
    </a>
    <div class="footer-content">
      <p>
        &copy; {{ siteData.name }} {{ currentYear }} |
        <a :href="`mailto:${siteData.social.email}`">{{ siteData.social.email }}</a>
      </p>
      <p>
        Design inspired by
        <a href="https://github.com/nrandecker/particle" target="_blank" rel="noopener noreferrer">nrandecker</a>
      </p>
      <p class="vue-credit">
        Rebuilt with Vue 3 + Vite + TypeScript
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use 'sass:color';

.footer {
  background: $main;
  padding: 30px 20px;
  text-align: center;
}

.footer-up {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: $accent-color;
  color: $text-light;
  border-radius: 4px;
  font-size: 20px;
  margin-bottom: 20px;
  transition: background $transition-normal;

  &:hover {
    background: color.adjust($accent-color, $lightness: -10%);
  }
}

.footer-content {
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 75%;
    margin: 5px 0;

    a {
      color: rgba(255, 255, 255, 0.9);

      &:hover {
        color: $accent-color;
      }
    }
  }

  .vue-credit {
    margin-top: 15px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 70%;
  }
}
</style>
