<script setup>
import VideoBackground from '@/components/common/VideoBackground.vue'
import { provideVideo } from '@/composables/useVideo'

provideVideo()
</script>

<template>
  <div class="index-page">
    <VideoBackground />
    <div class="overlay">
      <div class="content mt-5 text-center text-lg-start">
        <h1 class="intro pt-5 mt-5">
          Experience <br class="d-lg-none d-md-none" />the joy of<br />
          finding your <br class="d-lg-none d-md-none" /><span>perfect home</span><br />
          here in Butuan.
        </h1>
        <router-link to="/login">
          <button class="mt-2 mx-auto mx-lg-0">Get Started</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.index-page {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  color: white;
}

.content h1 {
  font-family: 'Raleway', sans-serif;
}

.intro {
  font-size: 40px;
  font-weight: 700;
}

.intro span {
  color: #dfad03;
  font-size: 40px;
  font-weight: 700;
  text-shadow: rgba(223, 172, 3, 0.7) 0px 0px 45px;
}

.btn-primary {
  margin-top: 20px;
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}

button {
  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid #dfad03;
  font-size: 14px;
  text-transform: uppercase;
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

button:hover {
  background: #dfad03;
  box-shadow: 0 0 30px 5px #dfac03d5;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

button:hover::before {
  -webkit-animation: sh02 0.5s 0s linear;
  -moz-animation: sh02 0.5s 0s linear;
  animation: sh02 0.5s 0s linear;
}

button::before {
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

button:active {
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: box-shadow 0.2s ease-in;
  -moz-transition: box-shadow 0.2s ease-in;
  transition: box-shadow 0.2s ease-in;
}
</style>
