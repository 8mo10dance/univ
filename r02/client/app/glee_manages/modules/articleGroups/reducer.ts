import { ArticleGroup } from '../../types/models'
import * as ActionType from './actionType'
import * as actions from './actions'

export interface State {
  isFetching?: boolean
  all: ArticleGroup[]
}

type Action =
  | ReturnType<typeof actions.getArticleGroups.start>
  | ReturnType<typeof actions.getArticleGroups.succeed>
  | ReturnType<typeof actions.getArticleGroups.fail>

export default (state: State = { all: [] }, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_ARTICLE_GROUPS_START:
      return {
        ...state,
        isFetching: true,
      }
    case ActionType.GET_ARTICLE_GROUPS_SUCCEED:
      return {
        ...state,
        isFetching: false,
        all: action.payload.articleGroups,
      }
    case ActionType.GET_ARTICLE_GROUPS_FAIL:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}
