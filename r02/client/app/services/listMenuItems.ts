import axios from 'axios'

export const getListMenuItems = () => axios.get('/api/v1/list_menus')
