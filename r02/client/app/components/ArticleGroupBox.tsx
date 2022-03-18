import * as React from 'react'

import { ArticleGroup } from 'types/models'

import ArticleListBox from './ArticleListBox'

export type Props = {
  articleGroup?: ArticleGroup
}

export default ({ articleGroup }: Props) => {
  return <ArticleListBox articles={articleGroup ? articleGroup.articles : []} />
}
