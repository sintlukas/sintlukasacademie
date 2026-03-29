export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const params = new URLSearchParams({
    client_id: config.githubClientId,
    scope: 'repo,user',
    redirect_uri: `${config.public.siteUrl}/api/auth/callback`,
  })
  return sendRedirect(event, `https://github.com/login/oauth/authorize?${params}`)
})
