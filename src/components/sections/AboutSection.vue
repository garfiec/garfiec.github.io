<script setup lang="ts">
import { siteData } from '@/data/siteData'
</script>

<template>
  <section class="page-a">
    <div class="row">
      <h2>About</h2>
    </div>
    <div class="row">
      <div class="about-me">
        <div class="user-img-box">
          <img src="/img/garfie.jpg" alt="Garfie's photo" />
          <p class="user-short-desc">{{ siteData.bioImageCaption }}</p>
        </div>
        <div class="about-bio">
          <p class="user-short-desc" v-html="siteData.bio"></p>
          <h3>Endorsements</h3>
          <p class="endorsement">
            <em>{{ siteData.endorsement.text }}<br />- {{ siteData.endorsement.author }}</em>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-me {
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media only screen and (min-width: $tablet-width) {
    flex-direction: row;
    align-items: flex-start;
  }
}

.user-img-box {
  flex: 0 0 auto;
  text-align: center;

  img {
    max-width: 100%;
    width: 300px;
    border-radius: 4px;

    @media only screen and (min-width: $tablet-width) {
      width: 350px;
    }
  }

  .user-short-desc {
    font-size: 80%;
    color: #777;
    margin-top: 10px;
    font-style: italic;
  }
}

.about-bio {
  flex: 1;

  .user-short-desc {
    font-size: 90%;
    line-height: 1.6;
  }

  h3 {
    margin-top: 30px;
  }

  .endorsement {
    font-size: 90%;
    color: #666;
  }
}
</style>
