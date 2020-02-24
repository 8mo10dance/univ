import { all } from 'redux-saga/effects'
import articleGroupSagas from './articleGroup'
import linkSagas from './link'

export default function* rootSaga() {
  yield all([...articleGroupSagas, ...linkSagas])
}
