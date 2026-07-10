;(() => {
  const key = 'rakko-theme'
  let stored = null
  try {
    stored = window.localStorage.getItem(key)
  } catch {}
  const theme = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'light'
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolvedTheme = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme
  document.documentElement.classList.toggle('dark', resolvedTheme === 'dark')
})()
