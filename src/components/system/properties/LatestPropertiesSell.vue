<script setup>
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
]
</script>

<template>
  <div class="my-15">
    <v-lazy :min-height="100" :options="{ threshold: 0.9 }" transition="slide-x-transition">
      <div class="mb-3">
        <v-row justify="center" align="center">
          <v-col cols="auto">
            <h1><v-icon>mdi-minus</v-icon> Latest Properties for Sale</h1>
            <small class="ps-2">
              Discover the latest properties available for sale. Find your dream home or investment
              property today.
            </small>
          </v-col>

          <v-col class="text-end" cols>
            <v-btn variant="text" append-icon="mdi-arrow-right-thin">View All</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-lazy>

    <v-lazy :min-height="200" :options="{ threshold: 0.9 }" transition="slide-x-transition">
      <v-row>
        <v-col v-for="(item, idx) in items" :key="idx" cols="4">
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
    </v-lazy>
  </div>
</template>

<style scoped></style>
