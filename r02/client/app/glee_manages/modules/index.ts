import { combineReducers } from 'redux'
import articleGroupsReducer, {
  State as ArticleGroupsState,
} from './articleGroups/reducer'

export interface RootState {
  articleGroups: ArticleGroupsState
}

export const rootReducer = combineReducers({
  articleGroups: articleGroupsReducer,
})
