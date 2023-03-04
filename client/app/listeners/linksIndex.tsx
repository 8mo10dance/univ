import * as React from 'react'
import { render } from 'react-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { LinkListPage } from 'pages'
import theme from 'theme'

const listener = () => {
  const root = document.getElementById('links_index')
  if (!root) return

  const element = document.getElementById('data-links')
  const links = element !== null ? JSON.parse(element.innerHTML) : []

  render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LinkListPage links={links} />
    </ThemeProvider>,
    root,
  )
}

export default listener
