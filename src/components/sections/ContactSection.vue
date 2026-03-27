<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const submitStatus = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const statusMessage = ref('')

const submitForm = async () => {
  // Validation
  if (!formData.value.name.trim()) {
    statusMessage.value = 'Please provide your name.'
    submitStatus.value = 'error'
    return
  }
  if (!formData.value.email.trim()) {
    statusMessage.value = 'Please enter your email address.'
    submitStatus.value = 'error'
    return
  }
  if (!formData.value.message.trim()) {
    statusMessage.value = 'Message body can not be empty.'
    submitStatus.value = 'error'
    return
  }

  submitStatus.value = 'submitting'

  try {
    const response = await fetch('https://formspree.io/mwkreqaz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message
      })
    })

    if (response.ok) {
      submitStatus.value = 'success'
      statusMessage.value = 'Thank you! I will get back to you soon.'
      formData.value = { name: '', email: '', message: '' }
    } else {
      throw new Error('Form submission failed')
    }
  } catch {
    submitStatus.value = 'error'
    statusMessage.value = 'Something went wrong. Please try again.'
  }

  // Clear status after 4 seconds
  setTimeout(() => {
    submitStatus.value = 'idle'
    statusMessage.value = ''
  }, 4000)
}
</script>

<template>
  <section class="contact-section">
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 102"
      height="75"
      width="100%"
      class="svg-contact"
    >
      <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white" />
    </svg>

    <h2>Contact</h2>

    <div aria-live="polite" role="status">
      <p v-if="statusMessage" class="form-user-message" :class="submitStatus">
        {{ statusMessage }}
      </p>
    </div>

    <form id="contact-form" @submit.prevent="submitForm">
      <input
        v-model="formData.name"
        type="text"
        name="name"
        placeholder="Name"
        aria-label="Name"
        :disabled="submitStatus === 'submitting'"
      />
      <input
        v-model="formData.email"
        type="email"
        name="email"
        placeholder="Enter email"
        aria-label="Enter email"
        :disabled="submitStatus === 'submitting'"
      />
      <textarea
        v-model="formData.message"
        name="message"
        placeholder="Your Message"
        aria-label="Your Message"
        :disabled="submitStatus === 'submitting'"
      ></textarea>
      <button
        type="submit"
        class="contact-submit"
        :disabled="submitStatus === 'submitting'"
        :aria-label="submitStatus === 'submitting' ? 'Sending message' : 'Submit contact form'"
      >
        {{ submitStatus === 'submitting' ? 'Sending...' : 'Submit' }}
      </button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.contact-section {
  background: $main;
  padding: 0 0 60px;
  position: relative;

  h2 {
    color: $text-light;

    &::after {
      background-color: $accent-color;
    }
  }
}

.svg-contact {
  display: block;
}

.form-user-message {
  text-align: center;
  color: $text-light;
  margin-bottom: 20px;
  padding: 10px;

  &.error {
    color: #ff6b6b;
  }

  &.success {
    color: #51cf66;
  }
}

#contact-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  input,
  textarea {
    width: 100%;
    padding: 12px 15px;
    border: none;
    border-radius: 4px;
    background: $sec;
    color: $text-light;
    font-family: inherit;
    font-size: 90%;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      outline: 2px solid $accent-color;
      outline-offset: 2px;
    }

    &:disabled {
      opacity: 0.7;
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  .contact-submit {
    background: transparent;
    color: $text-light;
    border: 2px solid $text-light;
    padding: 12px 30px;
    font-size: 100%;
    cursor: pointer;
    transition: all $transition-normal;
    align-self: center;

    &:hover:not(:disabled) {
      background: $text-light;
      color: $main;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
}
</style>
