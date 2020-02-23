import { Link } from 'types/models'
import * as ActionType from './actionType'
import * as actions from './actions'

export interface State {
  isFetching?: boolean
  all: Link[]
}

type Action =
  | ReturnType<typeof actions.getAll.start>
  | ReturnType<typeof actions.getAll.succeed>
  | ReturnType<typeof actions.getAll.fail>

export default (state: State = { all: [] }, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_ALL_START:
      return {
        ...state,
        isFetching: true,
      }
    case ActionType.GET_ALL_SUCCEED:
      return {
        ...state,
        isFetching: false,
        all: action.payload.links,
      }
    case ActionType.GET_ALL_FAIL:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}
