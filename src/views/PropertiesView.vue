<script setup>
import { ref, onMounted } from 'vue'
import listingBg from '@/assets/images/listing-bg.png'
import AppFooter from '@/components/layout/AppFooter.vue'
import ScrollToTopFab from '@/components/common/ScrollToTopFab.vue'

const loading = ref(true)
const priceRange = ref([5000, 20000000])

onMounted(async () => {
  // Simulate data fetching
  await new Promise((resolve) => setTimeout(resolve, 1000))
  loading.value = false
})

const formatCurrency = (value) => {
  const formattedValue = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
  return formattedValue.replace('PHP', '₱')
}

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

  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 7',
    location: 'Location 7',
    description: 'This is a description of Property 7.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 8',
    location: 'Location 8',
    description: 'This is a description of Property 8.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 9',
    location: 'Location 9',
    description: 'This is a description of Property 9.',
    link: '#',
  },
]
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
            <h1>Discover Your Dream Property with Us😍</h1>
          </v-col>
        </v-row>
      </div>

      <div class="search-container">
        <v-row justify="center">
          <v-col cols="10" style="padding: 0" class="ps-2">
            <v-card
              :color="searchCard"
              class="search d-flex flex-grow-1 pa-4 rounded-0"
              style="z-index: 2"
              elevation="24"
            >
              <div class="d-flex align-center" style="width: 100%">
                <div class="mr-3" style="width: 60%">
                  <div class="text-body-2 font-weight-thin pb-1">Transaction</div>
                  <v-select
                    :items="['Buy', 'Rent', 'Assume']"
                    variant="solo-filled"
                    density="compact"
                    placeholder="Select Transaction"
                    hide-details
                    clearable
                  >
                  </v-select>
                </div>

                <div class="mr-3" style="width: 65%">
                  <div class="text-body-2 font-weight-thin pb-1">Location</div>
                  <v-text-field
                    variant="solo-filled"
                    placeholder="All"
                    density="compact"
                    hide-details
                    clearable
                  ></v-text-field>
                </div>

                <div class="mr-3" style="width: 90%">
                  <div class="text-body-2 font-weight-thin pb-1">Property Type</div>
                  <v-select
                    v-model="value"
                    :items="items"
                    variant="solo-filled"
                    density="compact"
                    placeholder="All"
                    multiple
                    clearable
                    hide-details
                  >
                    <template v-slot:selection="{ item, index }">
                      <v-chip v-if="index < 1">
                        <span>{{ item.title }}</span>
                      </v-chip>
                      <span v-if="index === 1" class="text-grey text-caption align-self-center">
                        (+{{ value.length - 1 }} others)
                      </span>
                    </template>
                  </v-select>
                </div>
                <div class="mr-3" style="width: 65%">
                  <div class="text-body-2 font-weight-thin pb-1">Price Range</div>
                  <v-range-slider
                    color="indigo-darken-4"
                    size="small"
                    v-model="priceRange"
                    step="100000"
                    :min="5000"
                    :max="20000000"
                    hide-details
                    focused="true"
                    thumb-label
                  >
                    <template v-slot:thumb-label="{ modelValue }">
                      <span>{{ formatCurrency(modelValue) }}</span>
                    </template>
                  </v-range-slider>
                </div>
                <v-btn color="indigo-darken-4" height="45" class="ms-5"> Clear Filter</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="filtered-items my-8">
        <v-container>
          <v-row>
            <v-col v-for="(item, idx) in items" :key="idx" cols="6">
              <v-card elevation="5" class="my-3 mx-2">
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
        </v-container>
      </div>

      <AppFooter />
      <ScrollToTopFab />
    </div>
  </div>
</template>

<style scoped>
.intro-text {
  position: absolute;
  top: 11rem;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-shadow: black 0px 5px 15px;
  z-index: 1;
}

.search-container {
  position: relative;
  top: -16px;
}

.darken-image {
  filter: brightness(0.7); /* Adjust the value as needed */
}

:deep(.v-slider-thumb__label) {
  background-color: #9fa8da;
}
:deep(.v-slider-thumb__label::before) {
  color: #9fa8da;
}
</style>
