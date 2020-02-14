import { takeLatest, put, call } from 'redux-saga/effects'
import * as ActionType from 'modules/articleGroups/actionType'
import * as actions from 'modules/articleGroups/actions'
import { getArticleGroups } from 'services/articleGroups'

function* getArticleGroupsTask() {
  try {
    const { data } = yield call(getArticleGroups)
    yield put(actions.getArticleGroups.succeed(data.articleGroups))
  } catch (e) {
    yield put(actions.getArticleGroups.fail())
  }
}

export default [
  takeLatest(ActionType.GET_ARTICLE_GROUPS_START, getArticleGroupsTask),
]
