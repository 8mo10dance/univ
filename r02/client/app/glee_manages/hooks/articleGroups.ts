import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../modules'
import { getArticleGroups } from '../modules/articleGroups/actions'

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

export const useCurrentArticleGroup = () => {
  const params = useParams<{ id: string }>()
  const articleGroups = useSelector(
    (rootState: RootState) => rootState.articleGroups.all
  )
  const currentArticleGroup =
    articleGroups.find(articleGroup => String(articleGroup.id) === params.id) ||
    articleGroups[0]

  return {
    currentArticleGroup,
  }
}
