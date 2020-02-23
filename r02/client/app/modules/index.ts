import { combineReducers } from 'redux'
import updateHistoryReducer, {
  State as UpdateHistoryState,
} from './updateHistory/reducer'
import articleGroupsReducer, {
  State as ArticleGroupsState,
} from './articleGroups/reducer'
import listMenuItemReducer, {
  State as ListMenuItemState,
} from './listMenuItem/reducer'

export interface RootState {
  updateHistories: UpdateHistoryState
  articleGroups: ArticleGroupsState
  listMenuItems: ListMenuItemState
}

export default combineReducers({
  updateHistories: updateHistoryReducer,
  articleGroups: articleGroupsReducer,
  listMenuItems: listMenuItemReducer,
})
