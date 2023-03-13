import * as React from 'react'
import { Box } from '@material-ui/core'

import { ArticleGroup } from 'types/models'
import TitleBox from 'components/TitleBox'
import Menu from 'components/Menu'
import ArticleGroupBox from 'components/ArticleGroupBox'
import { getArticleGroups } from 'services/articleGroups'

export default () => {
  const [articleGroups, setArticleGroups] = React.useState<ArticleGroup[]>([])

  const fetchArticleGroups = async () => {
    try {
      const { data } = await getArticleGroups()
      if (data.articleGroups === undefined) throw new Error()

      setArticleGroups(data.articleGroups)
    } catch (e) {
      // TODO
    }
  }

  React.useEffect(() => {
    fetchArticleGroups()
  }, [])

  return (
    <Box display="flex">
      <TitleBox />
      <Menu articleGroups={articleGroups} />
      <Box flex={1}>
        <ArticleGroupBox articleGroup={articleGroups[0]} />
      </Box>
    </Box>
  )
}
