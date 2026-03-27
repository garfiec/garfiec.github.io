<script setup lang="ts">
import TheNav from './components/layout/TheNav.vue'
import TheFooter from './components/layout/TheFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import WorkExperienceSection from './components/sections/WorkExperienceSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

</script>

<template>
  <div class="app-wrapper">
    <HeroSection />
    <TheNav />
    <main>
      <AboutSection id="about" />
      <EducationSection id="education" />
      <WorkExperienceSection id="work-experience" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss">
@use 'sass:color';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background-color: #fff;
  color: $text-primary;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
}

body {
  margin: 0;
}

a {
  color: $accent-color;
  text-decoration: none;
  transition: color $transition-fast;

  &:hover {
    color: color.adjust($accent-color, $lightness: -10%);
  }
}

h1, h2, h3 {
  font-weight: 300;
}

h2 {
  font-size: 175%;
  word-spacing: 2px;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1px;

  &::after {
    display: block;
    height: 2px;
    background-color: $accent-color;
    content: "";
    width: 100px;
    margin: 20px auto 0;
  }
}

h3 {
  font-size: 140%;
  margin-top: 20px;
  margin-bottom: 15px;
}

ul, ol {
  margin: 1em 0;
  padding-left: 40px;
}

.row {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 60px 0;

  @media only screen and (min-width: $mobile-width) {
    padding: 80px 0;
  }
}

.page-a {
  background-color: $bg-light;
}

.page-b {
  background-color: $bg-white;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
