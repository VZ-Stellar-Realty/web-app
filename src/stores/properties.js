import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'

export const usePropertiesStore = defineStore('properties', () => {
  const properties = ref([])
  const loading = ref(false)

  async function getProperties() {
    loading.value = true
    console.log('Fetching properties...')
    const { data, error } = await supabase.from('properties').select('*')
    if (error) {
      console.error('Error fetching properties:', error)
    } else {
      console.log('Fetched properties:', data)
      properties.value = data
    }
    loading.value = false
  }

  return { properties, loading, getProperties }
})
