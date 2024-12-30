<script setup>
import { onMounted, ref } from 'vue';
import { useVideo } from '@/composables/useVideo';

const { videoUrl, videoElement, isPlaying } = useVideo();
const localVideoElement = ref(null);

onMounted(() => {
  if (!videoElement.value) {
    videoElement.value = localVideoElement.value;
  }
  if (videoElement.value && !isPlaying.value) {
    videoElement.value.play();
    isPlaying.value = true;
  }
});
</script>

<template>
  <div class="video-container" v-if="videoUrl">
    <video ref="localVideoElement" autoplay muted loop>
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>
.video-container video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%) scale(1.3);
}
</style>