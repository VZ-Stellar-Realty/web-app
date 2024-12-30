import { ref, provide, inject } from 'vue'

const videoUrl = ref(new URL('@/assets/video/BUTUAN_Cinematic_Video.mp4', import.meta.url).href)
const videoElement = ref(null)
const isPlaying = ref(false)

export function provideVideo() {
  provide('videoUrl', videoUrl)
  provide('videoElement', videoElement)
  provide('isPlaying', isPlaying)
}

export function useVideo() {
  const videoUrl = inject('videoUrl')
  const videoElement = inject('videoElement')
  const isPlaying = inject('isPlaying')
  return { videoUrl, videoElement, isPlaying }
}
