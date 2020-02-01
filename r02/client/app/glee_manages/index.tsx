import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  const mainListElement = document.getElementById('fileListMain')
  const mainList = JSON.parse(mainListElement.innerHTML)
  const subListElement = document.getElementById('fileListSub')
  const subList = JSON.parse(subListElement.innerHTML)
  const content = JSON.parse(document.getElementById('content-json').innerHTML)

  render(
    <Provider store={store}>
      <App content={content} mainList={mainList} subList={subList} />,
    </Provider>,
    document.getElementById('root')
  )
})
