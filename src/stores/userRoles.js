import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'

export const useUserRolesStore = defineStore('userRoles', () => {
  // States
  const userRoles = ref([])

  // Reset State Action
  function $reset() {
    userRoles.value = []
  }

  // Retrieve User Roles
  async function getUserRoles() {
    const { data } = await supabase
      .from('user_roles')
      .select('*, pages: user_role_pages (page)')
      .order('user_role', { ascending: true })

    // Set the retrieved data to state
    userRoles.value = data
  }

  // Add User Roles
  async function addUserRole(formData) {
    const { pages, ...roleData } = formData

    const { data, error } = await supabase.from('user_roles').insert([roleData]).select()

    await updateUserRolePages(data[0].id, pages)

    return { data, error }
  }

  // Update User Roles
  async function updateUserRole(formData) {
    const { pages, ...roleData } = formData

    const { data, error } = await supabase
      .from('user_roles')
      .update(roleData)
      .eq('id', roleData.id)
      .select()

    await updateUserRolePages(formData.id, pages)

    return { data, error }
  }

  // Delete User Roles
  async function deleteUserRole(id) {
    // Delete related entries in user_role_pages
    const { error: deletePagesError } = await supabase
      .from('user_role_pages')
      .delete()
      .eq('user_role_id', id)

    if (deletePagesError) {
      console.error('Error deleting related pages:', deletePagesError)
      return { error: deletePagesError }
    }

    // Delete the user role
    const { error: deleteRoleError } = await supabase.from('user_roles').delete().eq('id', id)

    if (deleteRoleError) {
      console.error('Error deleting user role:', deleteRoleError)
      return { error: deleteRoleError }
    }

    return { error: null }
  }

  // Update User Roles Pages
  async function updateUserRolePages(id, pages) {
    // Retrieve existing pages for the role
    const { data: existingPages } = await supabase
      .from('user_role_pages')
      .select('page')
      .eq('user_role_id', id)

    const existingPageSet = new Set((existingPages || []).map((p) => p.page))

    // Insert new pages
    const pagesToAdd = pages.filter((page) => !existingPageSet.has(page))
    if (pagesToAdd.length > 0) {
      await supabase
        .from('user_role_pages')
        .insert(pagesToAdd.map((page) => ({ user_role_id: id, page })))
    }

    // Delete removed pages
    const pagesToDelete = (existingPages || []).filter((p) => !pages.includes(p.page))
    if (pagesToDelete.length > 0) {
      console.log(
        'Pages to delete:',
        pagesToDelete.map((p) => p.page),
      ) // Debugging statement
      const { error } = await supabase
        .from('user_role_pages')
        .delete()
        .in(
          'page',
          pagesToDelete.map((p) => p.page),
        )
        .eq('user_role_id', id)
      if (error) {
        console.error('Error deleting pages:', error) // Debugging statement
      }
    }
  }

  return {
    userRoles,
    $reset,
    getUserRoles,
    addUserRole,
    updateUserRole,
    deleteUserRole,
    updateUserRolePages,
  }
})
