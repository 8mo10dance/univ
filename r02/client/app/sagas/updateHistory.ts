import { takeLatest, put, call } from 'redux-saga/effects'
import * as ActionType from 'modules/updateHistory/actionType'
import * as actions from 'modules/updateHistory/actions'
import { getAll } from 'services/updateHistory'

function* getAllTask() {
  try {
    const response = yield call(getAll)
    if (response.status !== 200) {
      throw new Error('invalid response')
    }

    yield put(actions.getAll.succeed(response.data.updateHistories))
  } catch (e) {
    yield put(actions.getAll.fail())
  }
}

export default [takeLatest(ActionType.GET_ALL_START, getAllTask)]
