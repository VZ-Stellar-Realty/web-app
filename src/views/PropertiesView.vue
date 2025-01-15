<script setup>
import { ref, onMounted } from 'vue'
import listingBg from '@/assets/images/listing-bg.png'

const loading = ref(true)

onMounted(async () => {
  // Simulate data fetching
  await new Promise((resolve) => setTimeout(resolve, 1000))
  loading.value = false
})
</script>

<template>
  <div>
    <v-skeleton-loader v-if="loading" type="card"></v-skeleton-loader>
    <div v-else>
      <v-img
        class="darken-image"
        :height="200"
        aspect-ratio="16/9"
        cover
        :src="listingBg"
        draggable="false"
      ></v-img>

      <div class="intro-text">
        <v-row>
          <v-col class="text-center">
            <h1>Discover Your Dream Property with Us</h1>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-text {
  position: absolute;
  top: 12rem;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-shadow: black 0px 0px 10px;
  z-index: 1;
}

.darken-image {
  filter: brightness(0.7); /* Adjust the value as needed */
}
</style>
