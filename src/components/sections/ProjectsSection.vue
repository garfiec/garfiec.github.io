<script setup lang="ts">
import { siteData } from '@/data/siteData'
</script>

<template>
  <section class="page-b">
    <div class="row">
      <h2>Projects</h2>
    </div>
    <div class="row">
      <div class="projects-list">
        <div v-for="project in siteData.projects" :key="project.title" class="project-item">
          <h3>{{ project.title }}</h3>
          <p v-html="project.description"></p>
          <p v-if="project.link">
            <span v-if="project.linkText">It's open-source, find the library here! - </span>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">{{ project.linkText || 'Check it out' }}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects-list {
  max-width: 900px;
  margin: 0 auto;
}

.project-item {
  margin-bottom: 30px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 90%;
    line-height: 1.6;
  }

  .project-link {
    color: $accent-color;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
