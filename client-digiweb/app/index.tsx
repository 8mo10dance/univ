import React from 'react'
import { render } from 'react-dom'

import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  render(<App />, root)
})
