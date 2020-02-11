import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'modules'
import * as actions from 'modules/updateHistory/actions'

export default () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(actions.getAll.start())
  }, [])

  const updateHistories = useSelector(
    (rootState: RootState) => rootState.updateHistories.all
  )

  return (
    <div className="updateInfoArea">
      <h1 className="updateInfoArea__title">更新履歴</h1>
      <div className="updateInfoArea__info">
        <ul className="updateInfoArea__list">
          {updateHistories.map((history, index) => (
            <li key={index} className="updateInfoArea__item">
              <ul className="history">
                <li className="history__updatedAt">{history.updateDate}</li>
                <li className="history__description">{history.description}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
