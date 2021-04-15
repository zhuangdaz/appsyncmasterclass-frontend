import { Auth } from 'aws-amplify'

export default async (to, from, next) => {
  const isProtected = to.matched.some(route => route.meta.protected)
  const hasLoggedIn = await Auth.currentUserInfo()
  if (isProtected && !hasLoggedIn) {
    next("/")
    return
  }
  next()
}