import { Link } from 'types/models'
import * as ActionType from './actionType'

export const getAll = {
  start: () => ({
    type: ActionType.GET_ALL_START as typeof ActionType.GET_ALL_START,
  }),
  succeed: (links: Link[]) => ({
    type: ActionType.GET_ALL_SUCCEED as typeof ActionType.GET_ALL_SUCCEED,
    payload: {
      links,
    },
  }),
  fail: () => ({
    type: ActionType.GET_ALL_FAIL as typeof ActionType.GET_ALL_FAIL,
  }),
}
