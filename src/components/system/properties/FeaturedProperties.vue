<script setup>
import { ref } from 'vue'

const items = [
  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 1',
    location: 'Location 1',
    description: 'This is a description of Property 1.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 2',
    location: 'Location 2',
    description: 'This is a description of Property 2.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 3',
    location: 'Location 3',
    description: 'This is a description of Property 3.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 4',
    location: 'Location 4',
    description: 'This is a description of Property 4.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 5',
    location: 'Location 5',
    description: 'This is a description of Property 5.',
    link: '#',
  },

  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 6',
    location: 'Location 6',
    description: 'This is a description of Property 6.',
    link: '#',
  },
]

const chunkedItems = ref([])
const chunkSize = 3

for (let i = 0; i < items.length; i += chunkSize) {
  chunkedItems.value.push(items.slice(i, i + chunkSize))
}
</script>

<template>
  <div class="my-15">
    <v-lazy :min-height="100" :options="{ threshold: 0.9 }" transition="slide-x-transition">
      <div class="mb-3">
        <v-row justify="center" align="center">
          <v-col cols="auto">
            <h1><v-icon>mdi-minus</v-icon> Featured Properties</h1>
            <small class="ps-2"
              >Explore our featured properties. Find the best deals and premium properties available
              in the market.
            </small>
          </v-col>

          <v-col class="text-end" cols>
            <v-btn variant="text" append-icon="mdi-arrow-right-thin">View All</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-lazy>

    <v-lazy :min-height="200" :options="{ threshold: 0.9 }" transition="slide-x-transition">
      <v-carousel :show-arrows="false" hide-delimiter-background class="fp-carousel">
        <v-carousel-item v-for="(chunk, index) in chunkedItems" :key="index">
          <v-row>
            <v-col v-for="(item, idx) in chunk" :key="idx" cols="4">
              <v-card elevation="5" class="my-5 mx-2">
                <v-img :src="item.image" height="250px"></v-img>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle>{{ item.location }}</v-card-subtitle>
                <v-card-text>{{ item.description }}</v-card-text>
                <v-card-actions>
                  <v-btn :href="item.link" target="_blank">View Details</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-lazy>
  </div>
</template>

<style scoped>
.fp-carousel :deep(.v-btn--size-x-small) {
  --v-btn-height: none;
  color: #ffc400;
  opacity: 0.6;
}

.fp-carousel :deep(.v-btn--active) {
  color: #ffc400;
  opacity: 1;
  transform: scale(1.2);
  transition: transform 0.3s;
}
</style>
