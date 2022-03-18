import { AxiosPromise } from 'axios'

import { Link } from 'types/models'

import { apiRequest } from './base'

export type GetLinksResponse = {
  links: Link[]
}

export const getLinks = (): AxiosPromise<GetLinksResponse> =>
  apiRequest.get('https://r02-webapp.onrender.com/api/v1/links')
