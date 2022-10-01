(() => {
  window.onload = () => {
    let themes = {
      light: 'light',
      dark: 'dark'
    }
    
    const loadTheme = theme => document.body.setAttribute('class', theme)

    const setTheme = theme => window.localStorage.setItem(THEME_KEY, theme)

    const THEME_KEY = '__actv_theme'

    let storageTheme = window.localStorage.getItem(THEME_KEY)

    if (!storageTheme) {
      setTheme(themes.light)
      window['theme'] = themes.light
    } else {
      window['theme'] = storageTheme
    }

    loadTheme(window['theme'])

    let theme = document.getElementById('theme')
    theme.onclick = (e) => {
      e.preventDefault()
      let toChange = window['theme'] == themes.light ? themes.dark : themes.light
      window['theme'] = toChange
      setTheme(toChange)
      loadTheme(toChange)
    }

    document.body.onmousedown = () => !1
  }
})()