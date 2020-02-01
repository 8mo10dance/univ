import axios from 'axios'
import { ArticleGroup } from 'types/models'

const getArticleGroups = async () => {
  try {
    const response = await axios.get('/api/v1/article_groups')

    const articleGroups: ArticleGroup[] = response.data.articleGroups
    console.log(articleGroups)
  } catch (e) {
    console.log(e)
  }
}

getArticleGroups()
