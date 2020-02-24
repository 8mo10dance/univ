import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Box } from '@material-ui/core'
import { useArticleGroups } from 'hooks/articleGroups'
import TitleBox from 'components/TitleBox'
import Menu from 'components/Menu'
import ArticleGroupBox from 'components/ArticleGroupBox'

export default () => {
  const { articleGroups } = useArticleGroups()

  return (
    <Box display="flex">
      <TitleBox />
      <Menu articleGroups={articleGroups} />
      <Box flex={1}>
        <Switch>
          <Route exact path="/glee_manages">
            <ArticleGroupBox />
          </Route>
          <Route path="/glee_manages/:id">
            <ArticleGroupBox />
          </Route>
        </Switch>
      </Box>
    </Box>
  )
}
