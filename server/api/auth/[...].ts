import { NuxtAuthHandler } from '#auth'
import GitHubProvider from 'next-auth/providers/github'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  providers: [
    GitHubProvider.default({
      clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.public.GITHUB_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/login'
  }
})