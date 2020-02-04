import axios from 'axios'

export const getArticleGroups = () => axios.get('/api/v1/article_groups')
