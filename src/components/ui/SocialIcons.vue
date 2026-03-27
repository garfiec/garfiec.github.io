<script setup lang="ts">
import { siteData } from '@/data/siteData'
</script>

<template>
  <div class="header-icons">
    <a
      aria-label="Send email"
      :href="`mailto:${siteData.social.email}`"
      class="icon-link"
    >
      <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
    </a>
    <a
      aria-label="My LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
      :href="`https://linkedin.com/in/${siteData.social.linkedin}`"
      class="icon-link"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
    </a>
    <a
      aria-label="My Github"
      target="_blank"
      rel="noopener noreferrer"
      :href="`https://github.com/${siteData.social.github}`"
      class="icon-link"
    >
      <font-awesome-icon :icon="['fab', 'github-alt']" class="icon" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.header-icons {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 20px;
}

.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid $text-light;
  transition: all $transition-slow;

  .icon {
    color: $text-light;
    font-size: 80%;

    @media only screen and (min-width: $mobile-width) {
      font-size: 100%;
    }
  }

  &:hover {
    background: $text-light;

    .icon {
      color: $main;
    }
  }

  @media only screen and (min-width: $mobile-width) {
    width: 50px;
    height: 50px;
  }
}
</style>
