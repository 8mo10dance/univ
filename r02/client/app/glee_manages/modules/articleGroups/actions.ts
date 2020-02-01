import { ArticleGroup } from 'types/models'
import * as ActionType from './actionType'

export const pushAll = (articleGroups: ArticleGroup[]) => ({
  type: ActionType.PUSH_ALL as typeof ActionType.PUSH_ALL,
  payload: { articleGroups },
})
