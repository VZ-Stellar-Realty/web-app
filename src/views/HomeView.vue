<script setup>
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
const selectedItem = ref(0)

const selectedCardColor = computed(() => {
  return themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-4'
})

const defaultCardColor = computed(() => {
  return themeStore.theme === 'light' ? 'yellow-lighten-3' : 'indigo-darken-1'
})
</script>

<template>
  <v-sheet
    :color="themeStore.theme === 'light' ? 'yellow-lighten-3' : 'indigo-darken-1'"
    :height="800"
  >
    <v-container>
      <v-row class="pa-10">
        <v-col cols="10">
          <div div class="pt-10">
            <h1 class="text-h2">Find A House</h1>
            <h1 class="text-h2 pt-3">That Suits You</h1>

            <p class="pt-6 spacing">
              <strong>─</strong> When you're ready for a change, we're ready to
            </p>
            <p class="pt-1 spacing">help. Whether you're buying, selling or renting, we</p>
            <p class="pt-1 spacing">can help you move forward.</p>
          </div>
        </v-col>

        <v-item-group v-model="selectedItem" mandatory style="z-index: 2">
          <v-container class="ps-5 pt-8">
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
      </v-row>
      <img class="intro-img" src="@/assets/images/home-img.png" alt="" />
    </v-container>
  </v-sheet>

  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>HelloWorld</v-card-title>
            <v-card-text>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, nisl non
                lacinia fermentum, nunc nulla aliquet nunc, nec fermentum nunc libero nec nunc.
                Nullam nec nunc nec nunc sollicitudin.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.spacing {
  letter-spacing: 1px;
}

.intro-img {
  position: absolute;
  right: -10rem;
  bottom: 12rem;
  height: 55rem;
  z-index: 1;
}

.v-card.selection {
  /* From https://css.glass */

  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
}
</style>
