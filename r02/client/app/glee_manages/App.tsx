import * as React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
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
        <TitleBox />
        <Menu articleGroups={articleGroups} />
        <Switch>
          <Route exact path="/">
            <ArticleGroupBox />
          </Route>
          <Route path="/:id">
            <ArticleGroupBox />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}
