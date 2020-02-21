import { all } from 'redux-saga/effects'
import updateHistorySagas from './updateHistory'
import articleGroupSagas from './articleGroup'
import listMenuItemSagas from './listMenuItem'

export default function* rootSaga() {
  yield all([...updateHistorySagas, ...articleGroupSagas, ...listMenuItemSagas])
}
