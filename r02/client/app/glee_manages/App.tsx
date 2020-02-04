import * as React from 'react'
import { Article } from 'types/models'
import { useArticleGroups } from 'hooks/articleGroups'
import TitleBox from 'components/TitleBox'
import Menu from 'components/Menu'
import ArticleListBox from 'components/ArticleListBox'

interface Props {
  content: Article[]
}

export default ({ content }: Props) => {
  const { articleGroups } = useArticleGroups()

  return (
    <>
      <TitleBox />
      <Menu articleGroups={articleGroups} />
      <ArticleListBox articles={content} />
    </>
  )
}
