import * as React from 'react'
import { useDispatch } from 'react-redux'
import * as actions from 'modules/updateHistory/actions'
import Presenter from './presenter'

export default () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(actions.getAll.start())
  }, [])

  return <Presenter />
}
