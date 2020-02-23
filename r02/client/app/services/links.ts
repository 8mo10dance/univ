import { apiRequest } from './base'

export const getLinks = () => apiRequest.get('/api/v1/links')
