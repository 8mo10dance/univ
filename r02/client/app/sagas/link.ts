import { takeLatest, put, call } from 'redux-saga/effects'
import * as ActionType from 'modules/link/actionType'
import * as actions from 'modules/link/actions'
import { getLinks } from 'services/links'

function* getAllTask() {
  try {
    const { data } = yield call(getLinks)
    yield put(actions.getAll.succeed(data.links))
  } catch (e) {
    yield put(actions.getAll.fail())
  }
}

export default [takeLatest(ActionType.GET_ALL_START, getAllTask)]
