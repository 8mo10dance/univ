import { combineReducers } from 'redux'
import updateHistoryReducer, {
  State as UpdateHistoryState,
} from './updateHistory/reducer'

export interface RootState {
  updateHistories: UpdateHistoryState
}

export default combineReducers({
  updateHistories: updateHistoryReducer,
})
