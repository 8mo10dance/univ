import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import store from 'store'
import theme from 'theme'
import Router from 'router'

const listener = () => {
  const root = document.getElementById('root')
  if (!root) return

  render(
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>,
    root,
  )
}

export default listener
