import { combineReducers } from 'redux'
import articleGroupsReducer, {
  State as ArticleGroupsState,
} from './articleGroups/reducer'
import linkReducer, { State as LinkState } from './link/reducer'

export interface RootState {
  articleGroups: ArticleGroupsState
  links: LinkState
}

export default combineReducers({
  articleGroups: articleGroupsReducer,
  links: linkReducer,
})
