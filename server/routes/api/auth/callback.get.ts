export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { code } = getQuery(event)

  const response = await $fetch<{ access_token: string }>('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: { client_id: config.githubClientId, client_secret: config.githubClientSecret, code },
  })

  const content = JSON.stringify({ token: response.access_token, provider: 'github' })

  return new Response(
    `<!DOCTYPE html><html><body><script>
      (function () {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:${content}',
            e.origin
          )
        }
        window.addEventListener('message', receiveMessage, false)
        window.opener.postMessage('authorizing:github', '*')
      })()
    <\/script></body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  )
})
