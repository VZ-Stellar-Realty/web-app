<script setup>
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
</script>

<template>
  <v-sheet
    :color="themeStore.theme === 'light' ? 'yellow-lighten-3' : 'indigo-darken-1'"
    :height="800"
  >
    <v-container>
      <v-row class="pa-10">
        <v-col cols="10">
          <div class="pt-16">
            <h1 class="text-h2">Find A House</h1>
            <h1 class="text-h2 pt-3">That Suits You</h1>

            <p class="pt-6 spacing">Want to find home? We are ready to help you find</p>
            <p class="pt-1 spacing">one that suits your lifestyle and needs.</p>
          </div>

          <v-btn class="mt-7" size="large" color="indigo-darken-4" dark>Get Started</v-btn>
        </v-col>
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
}
</style>
