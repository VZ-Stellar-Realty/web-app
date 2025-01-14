<script setup></script>

<template>
  <v-footer class="bg-indigo-darken-4">
    <v-container>
      <v-row>
        <v-col class="mt-4" cols="5">
          <img src="@/assets/images/logo-nav-white.png" alt="" height="45" />

          <p class="pt-2">
            <small
              >Modern real estate brokerage web application designed to connect buyers and brokers
              within Butuan City.</small
            >
          </p>

          <!-- Social links -->

          <div class="pt-3">
            <v-btn icon class="me-2" href="" target="_blank" size="x-small" color="grey-darken-4">
              <v-icon color="white">mdi-facebook-messenger</v-icon>
            </v-btn>

            <v-btn
              icon
              class="me-2"
              href="https://www.facebook.com/vzstellarrealty"
              target="_blank"
              size="x-small"
              color="grey-darken-4"
            >
              <v-icon color="white">mdi-facebook</v-icon>
            </v-btn>

            <v-btn
              icon
              class="me-2"
              href="https://www.instagram.com/vzstellarrealty"
              target="_blank"
              size="x-small"
              color="grey-darken-4"
            >
              <v-icon color="white">mdi-instagram</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="3" class="ps-16">
          <div class="pt-4">
            <h4>Quick Links</h4>
            <ul class="quick-links pt-2">
              <li><a href="/about">About Us</a></li>
              <li><a href="/properties">Properties</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
          </div>
        </v-col>

        <!-- Get in touch -->
        <v-col cols="4" class="ps-10">
          <div class="git pt-4">
            <h4>Get in Touch</h4>
            <div class="pt-3">
              <p class="mb-2">
                <v-icon color="white" class="me-2">mdi-phone</v-icon>
                +1 234 567 890
              </p>
              <p class="mb-2">
                <v-icon color="white" class="me-2">mdi-email</v-icon>
                vzstellarrealty@gmail.com
              </p>
              <p class="mb-2">
                <v-icon color="white" class="me-2">mdi-map-marker</v-icon>
                123 Main Street, Butuan City
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-5"></v-divider>
      <v-row>
        <v-col class="text-center" cols="12">
          <small>
            Copyright &copy; {{ new Date().getFullYear() }} <strong>Vz Stellar Realty</strong>. All
            Rights Reserved
          </small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.quick-links {
  list-style-type: none; /* Remove list item dots */
  padding: 0;
}

.quick-links li {
  margin-bottom: 2px;
}

.quick-links a {
  text-decoration: none; /* Remove underline from links */
  color: inherit; /* Inherit color from parent */
  font-size: small;
}

.quick-links a:hover {
  color: #9fa8da;
}

.git p {
  font-size: small;
}
</style>
