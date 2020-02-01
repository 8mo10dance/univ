import * as React from 'react'
import { Article } from 'types/models'
import ArticleBox from 'components/ArticleBox'

interface Props {
  articles: Article[]
}

export default ({ articles }: Props) => {
  return (
    <>
      {articles.map((article, index) => (
        <ArticleBox key={index} {...article} />
      ))}
    </>
  )
}
