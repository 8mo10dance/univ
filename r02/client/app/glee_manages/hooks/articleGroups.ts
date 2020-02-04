import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'modules'
import { getArticleGroups } from 'modules/articleGroups/actions'

export const useArticleGroups = () => {
  const articleGroups = useSelector(
    (rootState: RootState) => rootState.articleGroups.all
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticleGroups.start())
  }, [])

  return { articleGroups }
}
