<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import { useDisplay } from 'vuetify'
import RealestateIcon2 from '@/components/icons/RealestateIcon2.vue'
import VideoBackground from '@/components/common/VideoBackground.vue'
import { provideVideo } from '@/composables/useVideo'

const { mobile } = useDisplay()

provideVideo()
</script>

<template>
  <AppLayout :is-with-app-bar-nav-icon="false">
    <template #content>
      <VideoBackground />
      <v-container>
        <v-row align="center" justify="center" class="h-screen">
          <v-col cols="11">
            <v-row align="center" justify="center">
              <v-col cols="7" class="px-0">
                <v-card
                  class="card-container rounded-s-lg rounded-0 d-flex align-center justify-center"
                  height="620px"
                  elevation="15"
                >
                  <RealestateIcon2 />
                </v-card>
              </v-col>

              <v-col cols="5" class="px-0">
                <v-card
                  class="register-form pa-8 rounded-e-lg rounded-0 d-flex align-center"
                  height="620px"
                  elevation="15"
                >
                  <RegisterForm></RegisterForm>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </AppLayout>
</template>

<style scoped>
.register-form {
  /* From https://css.glass */
  background: rgba(26, 34, 126, 0.34);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  /* border: 1px solid rgba(26, 35, 126, 0.3); */
}
</style>
