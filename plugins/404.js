export default defineNuxtRouteMiddleware((to) => {
  if (to.payload?.error?.statusCode == 404) {
    return navigateTo('/404', { redirectCode: 301 })
  }
})
