<script setup lang="ts">
import { siteData } from '@/data/siteData'
import SocialIcons from '@/components/ui/SocialIcons.vue'

const particlesOptions = {
  fullScreen: {
    enable: false
  },
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#888"
    },
    shape: {
      type: "polygon",
      options: {
        polygon: {
          sides: 5
        }
      }
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: { min: 1, max: 5 }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none" as const,
      random: true,
      straight: false,
      outModes: {
        default: "out" as const
      }
    }
  },
  interactivity: {
    detectsOn: "window" as const,
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: {
        enable: true
      }
    },
    modes: {
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
}
</script>

<template>
  <header class="hero">
    <vue-particles
      id="particles-js"
      :options="particlesOptions"
      class="particles-container"
    />

    <div class="header-text-box">
      <p class="site-title">
        Hello, I'm <strong><span class="highlight">{{ siteData.name }}</span></strong>.
      </p>
      <p class="site-description">{{ siteData.title }}</p>
      <SocialIcons />
    </div>

    <a class="scroll-down" href="#about" aria-label="Scroll down to content">
      <font-awesome-icon :icon="['fas', 'chevron-down']" class="icon" />
    </a>
  </header>
</template>

<style lang="scss" scoped>
.hero {
  background: $main;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.header-text-box {
  z-index: 10;
  text-align: center;
  position: relative;
  width: 90%;
  max-width: 800px;

  .site-title {
    display: inline-block;
    width: 100%;
    color: $text-light;
    font-size: 130%;
    line-height: 1.2em;
    word-spacing: 2px;
    letter-spacing: 0.5px;
    font-weight: 300;

    @media only screen and (min-width: $mobile-width) {
      font-size: 200%;
    }
  }

  .site-description {
    font-size: 100%;
    font-weight: 300;
    display: block;
    line-height: 1;
    color: $text-light;
    margin: 20px 0;

    @media only screen and (min-width: $mobile-width) {
      font-size: 150%;
    }
  }
}

.highlight {
  color: $accent-color;
}

.scroll-down {
  color: $text-light;
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
  bottom: 5%;
  left: 0;
  z-index: 10;

  .icon {
    animation: pulse 1.3s infinite;

    &:hover {
      color: $accent-color;
    }
  }
}

@keyframes pulse {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .icon {
    animation: none;
  }
}
</style>
