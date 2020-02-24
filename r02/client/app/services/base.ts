import axios from 'axios'
import * as camelcaseKeys from 'camelcase-keys'

export const apiRequest = axios.create({
  transformResponse: [
    (data, headers) => {
      if (
        !headers['content-type'] ||
        headers['content-type'].indexOf('application/json') === -1
      ) {
        return data
      }

      return camelcaseKeys(JSON.parse(data), { deep: true })
    },
  ],
})
