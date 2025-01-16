<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 100
}

const scrollToTop = () => {
  const scrollStep = -window.scrollY / (500 / 15)
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep)
    } else {
      clearInterval(scrollInterval)
    }
  }, 15)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <v-fab-transition>
    <v-btn
      v-show="visible"
      icon="mdi-chevron-up"
      size="large"
      color="amber-accent-3"
      elevation="24"
      fab
      @click="scrollToTop"
      class="scroll-to-top-fab"
    >
      <v-icon color="white" size="x-large">mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<style scoped>
.scroll-to-top-fab {
  position: fixed;
  bottom: 2rem;
  right: 4rem;
  z-index: 1000;
}
</style>
