import * as React from 'react'
import { useCurrentArticleGroup } from 'hooks/articleGroups'
import ArticleListBox from '../components/ArticleListBox'

export default () => {
  const { currentArticleGroup } = useCurrentArticleGroup()
  const articles = currentArticleGroup ? currentArticleGroup.articles : []

  return <ArticleListBox articles={articles} />
}
