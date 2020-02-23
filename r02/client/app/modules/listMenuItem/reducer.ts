import { ListMenuItem } from 'types/models'
import * as ActionType from './actionType'
import * as actions from './actions'

export interface State {
  isFetching?: boolean
  all: ListMenuItem[]
}

type Action =
  | ReturnType<typeof actions.getListMenuItems.start>
  | ReturnType<typeof actions.getListMenuItems.succeed>
  | ReturnType<typeof actions.getListMenuItems.fail>

export default (state: State = { all: [] }, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_LIST_MENU_ITEMS_START:
      return {
        ...state,
        isFetching: true,
      }
    case ActionType.GET_LIST_MENU_ITEMS_SUCCEED:
      return {
        ...state,
        isFetching: false,
        all: action.payload.listMenuItems,
      }
    case ActionType.GET_LIST_MENU_ITEMS_FAIL:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}
