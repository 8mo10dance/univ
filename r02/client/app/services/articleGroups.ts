import axios from 'axios'

export const getArticleGroups = () =>
  axios.get('https://glee.onrender.com/api/v1/article_groups')
