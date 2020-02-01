import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { ArticleGroup } from 'types/models'
import { RootState } from 'modules'
import { pushAll } from 'modules/articleGroups/actions'

export const useArticleGroups = () => {
  const articleGroups = useSelector(
    (rootState: RootState) => rootState.articleGroups.all
  )

  const dispatch = useDispatch()

  const getArticleGroups = async () => {
    try {
      const response = await axios.get('/api/v1/article_groups')

      const articleGroups: ArticleGroup[] = response.data.articleGroups
      dispatch(pushAll(articleGroups))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getArticleGroups()
  }, [])

  return { articleGroups }
}
