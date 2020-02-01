import axios from 'axios'

const getArticleGroups = async () => {
  try {
    const response = await axios.get('/api/v1/article_groups')

    console.log(response.data)
  } catch (e) {
    console.log(e)
  }
}

getArticleGroups()
