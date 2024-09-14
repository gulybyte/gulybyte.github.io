export default defineNuxtRouteMiddleware(async (to, from) => {
  const isLogged = await isLoggedIn()
  if (!isLogged)
    return navigateTo('/')
})

async function isLoggedIn(): Promise<boolean> {
  return true
}
