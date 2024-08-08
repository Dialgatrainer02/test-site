export default defineNuxtRouteMiddleware((to, from) => {
  const user = to.params.value
  if (user !== "test") {
    return abortNavigation()
  }
  })