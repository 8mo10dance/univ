import * as React from 'react'
import { Article, ArticleGroup } from 'types/models'
import { useArticleGroups } from 'hooks/articleGroups'
import TitleBox from 'components/TitleBox'
import Menu from 'components/Menu'
import ArticleListBox from 'components/ArticleListBox'

interface Props {
  content: Article[]
  mainList: ArticleGroup[]
  subList: ArticleGroup[]
}

export default ({ content, mainList, subList }: Props) => {
  const { articleGroups } = useArticleGroups()

  return (
    <>
      <TitleBox />
      <Menu mainList={mainList} subList={subList} />
      <ArticleListBox articles={content} />
    </>
  )
}
