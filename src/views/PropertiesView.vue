<script setup>
import { ref, onMounted } from 'vue'
import listingBg from '@/assets/images/listing-bg.png'

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

      <div>
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

                <div class="mr-3" style="width: 70%">
                  <div class="text-body-2 font-weight-thin pb-1">Location</div>
                  <v-text-field
                    variant="solo-filled"
                    placeholder="All"
                    density="compact"
                    hide-details
                    clearable
                  ></v-text-field>
                </div>

                <div class="mr-3" style="width: 80%">
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
                <div class="mr-3" style="width: 80%">
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

:deep(.v-slider-thumb__label) {
  background-color: #9fa8da;
}
:deep(.v-slider-thumb__label::before) {
  color: #9fa8da;
}
</style>
