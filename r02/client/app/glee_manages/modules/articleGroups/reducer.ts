import { ArticleGroup } from 'types/models'
import * as ActionType from './actionType'
import * as actions from './actions'

export interface State {
  all: ArticleGroup[]
}

type Action = ReturnType<typeof actions.pushAll>

export default (state: State = { all: [] }, action: Action): State => {
  switch (action.type) {
    case ActionType.PUSH_ALL:
      return {
        ...state,
        all: action.payload.articleGroups,
      }
    default:
      return state
  }
}
