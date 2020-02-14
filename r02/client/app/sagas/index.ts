import { all } from 'redux-saga/effects'
import updateHistorySagas from './updateHistory'

export default function* rootSaga() {
  yield all([...updateHistorySagas])
}
