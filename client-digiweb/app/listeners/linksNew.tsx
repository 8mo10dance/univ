import * as React from 'react'
import { render } from 'react-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { LinkNewPage } from 'pages'
import theme from 'theme'

const listener = () => {
  const root = document.getElementById('links_new')
  if (!root) return

  const element = document.getElementById('data-link')
  const link = element !== null ? JSON.parse(element.innerHTML) : {}

  render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LinkNewPage link={link} />
    </ThemeProvider>,
    root,
  )
}

export default listener
