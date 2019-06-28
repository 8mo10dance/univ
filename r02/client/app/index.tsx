import * as React from 'react'
import { render } from 'react-dom'
import SideMenu from './SideMenu'

document.addEventListener('DOMContentLoaded', () => {
  render(<SideMenu />, document.getElementById('root'))
})
