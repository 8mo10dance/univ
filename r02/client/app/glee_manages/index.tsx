import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  const content = JSON.parse(document.getElementById('content-json').innerHTML)

  render(
    <Provider store={store}>
      <App content={content} />,
    </Provider>,
    document.getElementById('root')
  )
})
