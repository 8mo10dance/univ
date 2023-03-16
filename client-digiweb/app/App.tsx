import * as React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from 'theme'
import { Digiweb } from 'pages'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Digiweb />
    </ThemeProvider>
  )
}

export default App
