import { takeLatest, put, call } from 'redux-saga/effects'
import * as ActionType from 'modules/listMenuItem/actionType'
import * as actions from 'modules/listMenuItem/actions'
import { getListMenuItems } from 'services/listMenuItems'

function* getListMenuItemsTask() {
  try {
    const { data } = yield call(getListMenuItems)
    yield put(actions.getListMenuItems.succeed(data.listMenuList)) // 名前が違うの、注意！
  } catch (e) {
    yield put(actions.getListMenuItems.fail())
  }
}

export default [
  takeLatest(ActionType.GET_LIST_MENU_ITEMS_START, getListMenuItemsTask),
]
