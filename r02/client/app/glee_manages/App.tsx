import * as React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline, Box } from '@material-ui/core'
import { useArticleGroups } from 'hooks/articleGroups'
import TitleBox from 'components/TitleBox'
import Menu from 'components/Menu'
import ArticleGroupBox from 'components/ArticleGroupBox'
import theme from './theme'

export default () => {
  const { articleGroups } = useArticleGroups()

  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box display="flex">
          <TitleBox />
          <Menu articleGroups={articleGroups} />
          <Box flex={1}>
            <Switch>
              <Route exact path="/">
                <ArticleGroupBox />
              </Route>
              <Route path="/:id">
                <ArticleGroupBox />
              </Route>
            </Switch>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  )
}
