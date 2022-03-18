import { AxiosPromise } from 'axios'

import { ArticleGroup } from 'types/models'

import { apiRequest } from './base'

export type GetArticleGroupsResponse = {
  articleGroups: ArticleGroup[]
}

export const getArticleGroups = (): AxiosPromise<GetArticleGroupsResponse> =>
  apiRequest.get('https://glee.onrender.com/api/v1/article_groups')
