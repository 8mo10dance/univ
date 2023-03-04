import * as React from 'react'
import { render } from 'react-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from 'theme'
import Router from 'router'

const listener = () => {
  const root = document.getElementById('root')
  if (!root) return

  render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>,
    root,
  )
}

export default listener
