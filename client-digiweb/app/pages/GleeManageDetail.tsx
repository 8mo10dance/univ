import React from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@material-ui/core'

import { ArticleGroup } from 'types/models'
import TitleBox from 'components/TitleBox'
import Menu from 'components/Menu'
import ArticleGroupBox from 'components/ArticleGroupBox'
import { getArticleGroups } from 'services/articleGroups'

const GleeManageDetail = () => {
  const params = useParams<{ id: string }>()
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

  const articleGroup = articleGroups.find(g => g.id === Number(params.id))
  if (articleGroup === undefined) return null

  return (
    <Box display="flex">
      <TitleBox />
      <Menu articleGroups={articleGroups} />
      <Box flex={1}>
        <ArticleGroupBox articleGroup={articleGroup} />
      </Box>
    </Box>
  )
}

export default GleeManageDetail
