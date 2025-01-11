<script setup>
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import AppFooter from '@/components/layout/AppFooter.vue'
import FeaturedProperties from '@/components/system/properties/FeaturedProperties.vue'

const themeStore = useThemeStore()
const selectedItem = ref(0)

const selectedCardColor = computed(() => {
  return themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-4'
})

const defaultCardColor = computed(() => {
  return themeStore.theme === 'light' ? 'yellow-lighten-3' : 'indigo-darken-1'
})

const searchCard = computed(() => {
  return themeStore.theme === 'light' ? '#fff59d4a' : '#3949ab47'
})

const value = ref([])
const items = [
  { title: 'Apartment' },
  { title: 'Commercial' },
  { title: 'House & Lot' },
  { title: 'Industrial' },
  { title: 'Land' },
  { title: 'Office' },
  { title: 'Residential' },
  { title: 'Villa' },
  { title: 'Warehouse' },
]
</script>

<template>
  <v-sheet
    :color="themeStore.theme === 'light' ? 'yellow-lighten-3' : 'indigo-darken-1  '"
    :height="640"
  >
    <v-container>
      <v-row class="pt-10">
        <v-col cols="10">
          <div div class="pt-10">
            <h1 class="text-h2">Find A House</h1>
            <h1 class="text-h2 pt-3">That Suits You</h1>

            <p class="pt-6 spacing">
              <strong>─</strong> When you're ready for a change, we're ready to help.
            </p>
            <p class="pt-1 spacing">Whether you're buying, selling or renting, we can help</p>
            <p class="pt-1 spacing">you move forward.</p>
          </div>
        </v-col>

        <v-item-group v-model="selectedItem" mandatory style="z-index: 2">
          <v-container class="ps-5 pt-8" style="padding: 12px">
            <v-row>
              <v-col
                v-for="(item, index) in ['Buy', 'Rent', 'Assume']"
                :key="index"
                cols="4"
                style="padding: 0"
              >
                <v-item v-slot="{ isSelected, toggle }">
                  <v-card
                    :color="isSelected ? selectedCardColor : defaultCardColor"
                    class="selection d-flex align-center justify-center rounded-0 rounded-t-xl"
                    height="50"
                    width="130"
                    flat
                    @click="toggle"
                  >
                    <v-scroll-y-transition>
                      <div class="text-center">
                        {{ item }}
                      </div>
                    </v-scroll-y-transition>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>

        <!-- Search -->
        <v-col cols="9" style="padding: 0" class="ps-2">
          <v-card
            :color="searchCard"
            class="search d-flex flex-grow-1 pa-4 rounded-0 rounded-e-xl rounded-bs-xl"
            style="z-index: 2"
            elevation="24"
          >
            <div class="d-flex align-center" style="width: 100%">
              <div class="mr-3" style="width: 70%">
                <div class="text-body-2 font-weight-thin pb-1">Location</div>
                <v-text-field
                  variant="solo-filled"
                  placeholder="Ex. Villa Kananga"
                  density="compact"
                  hide-details
                  clearable
                ></v-text-field>
              </div>
              <div class="mr-3" style="width: 100%">
                <div class="text-body-2 font-weight-thin pb-1">Property Type</div>
                <v-select
                  v-model="value"
                  :items="items"
                  variant="solo-filled"
                  density="compact"
                  placeholder="Select Property Type"
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
              <div class="mr-3" style="width: 90%">
                <div class="text-body-2 font-weight-thin pb-1">Price Range</div>
                <v-select
                  placeholder="Select Price Range"
                  :items="['$100,000 - $200,000', '$200,000 - $300,000', '$300,000 - $400,000']"
                  multiple
                  variant="solo-filled"
                  density="compact"
                  hide-details
                  clearable
                  chips
                ></v-select>
              </div>
              <v-btn icon="mdi-magnify" class="rounded-lg" color="indigo-darken-4"></v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <img class="intro-img" src="@/assets/images/home-img.png" alt="" />
    </v-container>
  </v-sheet>

  <div>
    <v-container>
      <FeaturedProperties />
    </v-container>

    <AppFooter />
  </div>
</template>

<style scoped>
.spacing {
  letter-spacing: 1px;
}

.intro-img {
  position: absolute;
  right: -8rem;
  top: -7rem;
  height: 51rem;
  z-index: 1;
}

.v-card.selection {
  /* From https://css.glass */
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
}

.v-card.search {
  background: #fff59d4a;
  /* From https://css.glass */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
}
</style>
