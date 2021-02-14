import * as React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'

const Header: React.FC<{}> = ({ children }) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>{children}</Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Header
