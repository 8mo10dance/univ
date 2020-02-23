import { apiRequest } from './base'

export const getListMenuItems = () => apiRequest.get('/api/v1/list_menus')
