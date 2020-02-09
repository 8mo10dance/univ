import axios from 'axios'
import { UpdateHistory } from 'types/models'

interface GetAllResponse {
  updateHistories: UpdateHistory[]
}

export const getAll = () =>
  axios.get<GetAllResponse>('/api/v1/update_histories')
