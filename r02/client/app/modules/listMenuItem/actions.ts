import { ListMenuItem } from 'types/models'
import * as ActionType from './actionType'

export const getListMenuItems = {
  start: () => ({
    type: ActionType.GET_LIST_MENU_ITEMS_START as typeof ActionType.GET_LIST_MENU_ITEMS_START,
  }),
  succeed: (listMenuItems: ListMenuItem[]) => ({
    type: ActionType.GET_LIST_MENU_ITEMS_SUCCEED as typeof ActionType.GET_LIST_MENU_ITEMS_SUCCEED,
    payload: { listMenuItems },
  }),
  fail: () => ({
    type: ActionType.GET_LIST_MENU_ITEMS_FAIL as typeof ActionType.GET_LIST_MENU_ITEMS_FAIL,
  }),
}
