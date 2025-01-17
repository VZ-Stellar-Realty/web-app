<script setup>
import { useThemeStore } from '@/stores/themeStore'
import { computed } from 'vue'
import avatarImage from '@/assets/images/avatar.png'

const themeStore = useThemeStore()

const borderColor = computed(() => (themeStore.theme === 'light' ? 'white' : '#212121'))

const items = [
  {
    name: 'Joren Verdad',
    email: 'jorenverdad@gmail.com',
    contact: '+639123456789',
    bio: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum quod omnis minima ducimus possimus',
  },
  {
    name: 'Honey Mae Omela',
    email: 'honeymaeomela@gmail.com',
    contact: '+639123456789',
    bio: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum quod omnis minima ducimus possimus',
  },
  {
    name: 'Venus Villaflor',
    email: 'venusvillaflor123@gmail.com',
    contact: '+639123456789',
    bio: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum quod omnis minima ducimus possimus',
  },
]
</script>

<template>
  <div class="mt-15 mb-4">
    <v-lazy :min-height="100" :options="{ threshold: 0.9 }" transition="slide-x-transition">
      <div class="mb-3">
        <v-row justify="center" align="center">
          <v-col cols="auto">
            <h1><v-icon>mdi-minus</v-icon> Featured Brokers</h1>
            <small class="ps-2">
              Meet our brokers who are ready to assist you in finding your perfect property. They
              are experienced and dedicated to providing the best service.
            </small>
          </v-col>

          <v-col class="text-end" cols>
            <v-btn variant="text" append-icon="mdi-arrow-right-thin">View All</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-lazy>

    <v-row style="z-index: 5">
      <div class="featbrokers-bg">
        <v-sheet color="indigo-darken-4" height="430px"></v-sheet>
      </div>
      <v-col v-for="(item, idx) in items" :key="idx" cols="4">
        <v-card elevation="12" class="my-5 mx-2 d-flex flex-column" height="445">
          <v-sheet
            :color="themeStore.theme === 'light' ? 'yellow-lighten-3' : 'indigo-darken-1 '"
            height="150px"
          ></v-sheet>
          <div class="broker-avatar">
            <v-avatar
              :image="avatarImage"
              size="130"
              :style="{ borderColor: borderColor }"
              class="bordered-avatar"
            ></v-avatar>
          </div>
          <div class="pt-2 text-center flex-grow-1">
            <v-card-title class="pt-16">{{ item.name }}</v-card-title>
            <div class="mb-3">
              <v-chip
                class="me-2"
                :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-1  '"
                size="small"
                >{{ item.email }}</v-chip
              >
              <v-chip
                :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-1  '"
                size="small"
                >{{ item.contact }}</v-chip
              >
            </div>
            <p class="px-5 text-disabled">{{ item.bio }}</p>
          </div>

          <v-card-actions class="mt-auto">
            <v-btn color="amber-accent-3" variant="tonal">More Details</v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-1  '"
              icon="mdi-facebook-messenger"
              size="small"
              variant="tonal"
              s
            ></v-btn>
            <v-btn
              :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-1  '"
              icon="mdi-facebook"
              size="small"
              variant="tonal"
            ></v-btn>
            <v-btn
              :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-1  '"
              icon="mdi-instagram"
              size="small"
              variant="tonal"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.featbrokers-bg {
  position: absolute;
  bottom: 17rem;
  left: 0;
  right: 0;
  z-index: 0;
}

.broker-avatar {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
}

.bordered-avatar {
  border-width: 7px;
  border-style: solid;
}
</style>
