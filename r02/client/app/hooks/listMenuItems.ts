import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'modules'
import { getListMenuItems } from 'modules/listMenuItem/actions'

export const useListMenuItems = () => {
  const listMenuItems = useSelector(
    ({ listMenuItems }: RootState) => listMenuItems
  )
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getListMenuItems.start())
  }, [])

  return {
    listMenuItems: listMenuItems.all,
    isFetching: listMenuItems.isFetching,
  }
}
