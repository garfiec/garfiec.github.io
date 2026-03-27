<script setup lang="ts">
import { siteData } from '@/data/siteData'
import ExperienceCard from '@/components/ui/ExperienceCard.vue'
</script>

<template>
  <section class="page-a">
    <div class="row">
      <h2>Work Experience</h2>
    </div>
    <div class="row">
      <ExperienceCard
        v-for="(exp, index) in siteData.experience"
        :key="exp.company"
        :experience="exp"
        :imagePosition="index % 2 === 0 ? 'right' : 'left'"
      />
      <h3 class="resume-link">
        Download my resume:
        <a class="project-link" href="/files/Garfie_Chiu_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </h3>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.resume-link {
  text-align: center;
  margin-top: 20px;

  .project-link {
    color: $accent-color;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
