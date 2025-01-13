<script setup>
import UsingComputer from '@/components/icons/UsingComputer.vue'
import ContactPerson from '@/components/icons/ContactPerson.vue'
import SitBack from '@/components/icons/SitBack.vue'
</script>

<template>
  <div class="my-15">
    <div class="mb-10 text-center">
      <h1>How It Works</h1>
      <small class="ps-2">
        Discover how our platform connects you with the best properties and brokers.
      </small>
    </div>

    <v-timeline direction="horizontal" dot-color="surface" fill-dot>
      <v-timeline-item size="large" elevation="10" class="first-timeline">
        <template v-slot:icon>
          <v-icon color="amber-accent-3" size="x-large">mdi-numeric-1</v-icon>
        </template>
        <template v-slot:opposite>
          <div class="text-center">
            <div class="text-h6 font-weight-black pb-2">
              Search the kind <br />
              of property you want
            </div>
            <p class="text-medium-emphasis">
              Use our advanced search tools to find the perfect property that meets your needs and
              preferences.
            </p>
          </div>
        </template>
        <div>
          <UsingComputer />
        </div>
      </v-timeline-item>

      <v-timeline-item size="large" elevation="10">
        <template v-slot:icon>
          <v-icon color="amber-accent-3" size="x-large">mdi-numeric-2</v-icon>
        </template>
        <template v-slot:opposite>
          <ContactPerson />
        </template>
        <div class="text-center">
          <div class="text-h6 font-weight-black pb-2">Contact the broker</div>
          <p class="text-medium-emphasis">
            Get in touch with experienced brokers who can provide you with more details and arrange
            viewings.
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item size="large" elevation="10" class="last-timeline">
        <template v-slot:icon>
          <v-icon color="amber-accent-3" size="x-large">mdi-numeric-3</v-icon>
        </template>
        <template v-slot:opposite>
          <div class="text-center">
            <div class="text-h6 font-weight-black pb-1">
              Sit back and <br />
              wait for the good news
            </div>
            <p class="text-medium-emphasis">
              Once you've found your ideal property, our brokers will handle the rest, ensuring a
              smooth transaction process.
            </p>
          </div>
        </template>
        <div>
          <SitBack />
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<style scoped>
.first-timeline :deep(.v-timeline-divider__before) {
  background: none;
}

.last-timeline :deep(.v-timeline-divider__after) {
  background: none;
}
</style>
