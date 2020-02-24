import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'modules'
import { getAll } from 'modules/link/actions'

export const useLinks = () => {
  const links = useSelector(({ links }: RootState) => links)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAll.start())
  }, [])

  return {
    links: links.all,
    isFetching: links.isFetching,
  }
}
