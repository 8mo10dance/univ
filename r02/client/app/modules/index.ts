import { combineReducers } from 'redux'
import updateHistoryReducer, {
  State as UpdateHistoryState,
} from './updateHistory/reducer'
import articleGroupsReducer, {
  State as ArticleGroupsState,
} from './articleGroups/reducer'

export interface RootState {
  updateHistories: UpdateHistoryState
  articleGroups: ArticleGroupsState
}

export default combineReducers({
  updateHistories: updateHistoryReducer,
  articleGroups: articleGroupsReducer,
})
