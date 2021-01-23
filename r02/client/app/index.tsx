import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import store from './store'
import theme from 'theme'
import Router from './router'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
  )
})
