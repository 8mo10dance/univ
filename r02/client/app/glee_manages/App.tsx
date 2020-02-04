import * as React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { useArticleGroups } from 'hooks/articleGroups'
import TitleBox from 'components/TitleBox'
import Menu from 'components/Menu'
import ArticleGroupBox from 'components/ArticleGroupBox'

export default () => {
  const { articleGroups } = useArticleGroups()

  return (
    <Router>
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
    </Router>
  )
}
