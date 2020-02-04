import * as React from 'react'
import { useArticleGroups } from 'hooks/articleGroups'
import TitleBox from 'components/TitleBox'
import Menu from 'components/Menu'
import ArticleGroupBox from 'components/ArticleGroupBox'

export default () => {
  const { articleGroups } = useArticleGroups()

  return (
    <>
      <TitleBox />
      <Menu articleGroups={articleGroups} />
      <ArticleGroupBox />
    </>
  )
}
