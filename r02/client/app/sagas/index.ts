import { all } from 'redux-saga/effects'
import updateHistorySagas from './updateHistory'
import articleGroupSagas from './articleGroup'

export default function* rootSaga() {
  yield all([...updateHistorySagas, ...articleGroupSagas])
}
