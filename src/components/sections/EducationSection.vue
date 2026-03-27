<script setup lang="ts">
import { siteData } from '@/data/siteData'
</script>

<template>
  <section class="page-b">
    <div class="row">
      <h2>Education</h2>
    </div>
    <div class="row">
      <div class="education-content" v-for="edu in siteData.education" :key="edu.institution">
        <div class="education-info">
          <h3>{{ edu.institution }}</h3>
          <p>{{ edu.degree }} c/o {{ edu.year }}</p>
          <p><em>Key Courses</em></p>
          <ul>
            <li v-for="course in edu.courses" :key="course">{{ course }}</li>
          </ul>
        </div>
        <div class="education-logo">
          <img :src="edu.logo" :alt="edu.institution" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.education-content {
  display: flex;
  flex-direction: column-reverse;
  gap: 30px;

  @media only screen and (min-width: $tablet-width) {
    flex-direction: row;
    align-items: flex-start;
  }
}

.education-info {
  flex: 1;

  h3 {
    margin-top: 0;
  }

  p {
    font-size: 90%;
  }

  ul {
    font-size: 85%;
    columns: 1;

    @media only screen and (min-width: $tablet-width) {
      columns: 2;
    }

    li {
      margin-bottom: 5px;
    }
  }
}

.education-logo {
  flex: 0 0 auto;
  text-align: center;

  img {
    max-width: 200px;
    width: 100%;

    @media only screen and (min-width: $tablet-width) {
      max-width: 250px;
    }
  }
}
</style>
