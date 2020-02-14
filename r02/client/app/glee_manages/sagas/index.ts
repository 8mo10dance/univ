import { all } from 'redux-saga/effects'
import articleGroupSagas from './articleGroup'

export default function* rootSaga() {
  yield all([...articleGroupSagas])
}
