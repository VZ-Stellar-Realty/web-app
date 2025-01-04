<script setup>
import AlertNotification from '@/components/common/AlertNotification.vue'
import { requiredValidator, emailValidator } from '@/utils/validators'
import { useLogin } from '@/composables/auth/login'
import { ref } from 'vue'
import GoogleIcon from '@/components/icons/GoogleIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'

const { formData, formAction, refVForm, onFormSubmit } = useLogin()

const isPasswordVisible = ref(false)
</script>

<template>
  <v-form ref="refVForm" @submit.prevent="onFormSubmit">
    <v-row dense>
      <v-col cols="12" class="text-center">
        <h4 class="text-h5 mb-1">Welcome Back! 👋🏻</h4>
        <p class="mb-1">Please fill in the form to log in to your account</p>
      </v-col>

      <v-col cols="12">
        <AlertNotification
          :form-success-message="formAction.formSuccessMessage"
          :form-error-message="formAction.formErrorMessage"
        ></AlertNotification>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="formData.email"
          label="Email"
          placeholder="example@gmail.com"
          variant="outlined"
          prepend-inner-icon="mdi-email-outline"
          color="#dfad03"
          :rules="[requiredValidator, emailValidator]"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="formData.password"
          prepend-inner-icon="mdi-lock-outline"
          label="Password"
          placeholder="··········"
          variant="outlined"
          color="#dfad03"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
          :rules="[requiredValidator]"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Remember me checkbox & Forgot Password -->
    <div class="d-flex align-center justify-space-between flex-wrap m-0">
      <v-checkbox class="d-flex align-center" color="#dfad03" label="Remember me" />
      <a class="text-color pe-4" href="javascript:void(0)"> Forgot Password? </a>
    </div>

    <v-btn
      class="mt-2 text-white login-btn"
      type="submit"
      color="#dfad03"
      prepend-icon="mdi-login"
      :disabled="formAction.formProcess"
      :loading="formAction.formProcess"
      block
    >
      Login
    </v-btn>

    <div class="my-5">
      <v-divider class="border-opacity-25"><small>or</small></v-divider>
    </div>

    <v-row>
      <v-col cols="6">
        <v-btn variant="outlined" block @click="onSocialLogin('google')">
          <GoogleIcon />
          <small>Google</small>
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn variant="outlined" block @click="onSocialLogin('facebook')">
          <FacebookIcon />
          <small>Facebook</small>
        </v-btn>
      </v-col>
    </v-row>

    <v-card-text class="text-center mt-3">
      <span class="text-center font-weight-light"> Don't have an account? </span>
      <router-link to="/register" class="text-decoration-none">
        <span class="text-color text-decoration-none cursor-pointer"> Create an account </span>
      </router-link>
    </v-card-text>
  </v-form>
</template>

<style scoped>
.text-color {
  color: #dfad03;
}

.v-btn.login-btn {
  position: relative;
  padding: 10px 20px;
  border: 1px solid #dfad03;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.v-btn.login-btn:hover {
  background: #dfad03;
  box-shadow: 0 0 15px 2px #dfac03d5;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.v-btn.login-btn:hover::before {
  -webkit-animation: sh02 0.5s 0s linear;
  -moz-animation: sh02 0.5s 0s linear;
  animation: sh02 0.5s 0s linear;
}

.v-btn.login-btn::before {
  content: '';
  display: block;
  width: 0px;
  height: 86%;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  background: #fff;
  box-shadow: 0 0 50px 30px #fff;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  -o-transform: skewX(-20deg);
  transform: skewX(-20deg);
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}

.v-btn.login-btn:active {
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: box-shadow 0.2s ease-in;
  -moz-transition: box-shadow 0.2s ease-in;
  transition: box-shadow 0.2s ease-in;
}
</style>
