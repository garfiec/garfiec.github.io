<script setup lang="ts">
import type { Experience } from '@/data/siteData'

defineProps<{
  experience: Experience
  imagePosition: 'left' | 'right'
}>()
</script>

<template>
  <div class="experience-card" :class="{ 'image-left': imagePosition === 'left' }">
    <div class="experience-content">
      <h3>{{ experience.company }}</h3>
      <div v-for="position in experience.positions" :key="position.title" class="position">
        <p><strong>{{ position.title }}</strong></p>
        <p>{{ position.description }}</p>
      </div>
      <ul v-if="experience.bullets.length > 0">
        <li v-for="bullet in experience.bullets" :key="bullet" v-html="bullet"></li>
      </ul>
    </div>
    <div class="experience-logo">
      <img :src="experience.logo" :alt="experience.company" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience-card {
  display: flex;
  flex-direction: column-reverse;
  gap: 30px;
  margin-bottom: 40px;

  @media only screen and (min-width: $tablet-width) {
    flex-direction: row;
    align-items: flex-start;
  }

  &.image-left {
    @media only screen and (min-width: $tablet-width) {
      flex-direction: row-reverse;
    }

    .experience-content {
      @media only screen and (min-width: $tablet-width) {
        text-align: left;
      }
    }
  }
}

.experience-content {
  flex: 1;

  h3 {
    margin-top: 0;
  }

  .position {
    margin-bottom: 15px;

    p {
      font-size: 90%;
      margin: 5px 0;
    }
  }

  ul {
    font-size: 85%;

    li {
      margin-bottom: 8px;
    }
  }
}

.experience-logo {
  flex: 0 0 auto;
  text-align: center;

  img {
    max-width: 150px;
    width: 100%;

    @media only screen and (min-width: $tablet-width) {
      max-width: 180px;
    }
  }
}
</style>
