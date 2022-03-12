import { apiRequest } from './base'

export const getLinks = () =>
  apiRequest.get('https://r02-webapp.onrender.com/api/v1/links')
