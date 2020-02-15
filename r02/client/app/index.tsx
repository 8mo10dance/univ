import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import App2 from './glee_manages/App'

document.addEventListener('DOMContentLoaded', () => {
  const e = document.getElementById('root')

  if (e) {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      e
    )
  } else {
    render(
      <Provider store={store}>
        <App2 />,
      </Provider>,
      document.getElementById('root2')
    )
  }
})
