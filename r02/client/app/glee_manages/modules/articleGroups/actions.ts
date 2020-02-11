import { ArticleGroup } from '../../types/models'
import * as ActionType from './actionType'

export const getArticleGroups = {
  start: () => ({
    type: ActionType.GET_ARTICLE_GROUPS_START as typeof ActionType.GET_ARTICLE_GROUPS_START,
  }),
  succeed: (articleGroups: ArticleGroup[]) => ({
    type: ActionType.GET_ARTICLE_GROUPS_SUCCEED as typeof ActionType.GET_ARTICLE_GROUPS_SUCCEED,
    payload: {
      articleGroups,
    },
  }),
  fail: () => ({
    type: ActionType.GET_ARTICLE_GROUPS_FAIL as typeof ActionType.GET_ARTICLE_GROUPS_FAIL,
  }),
}
