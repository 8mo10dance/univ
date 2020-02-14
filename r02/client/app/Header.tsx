import * as React from 'react'

export default () => {
  return (
    <div className="header">
      <h1 className="header__title">DigiWeb</h1>
      <div className="header__nav">
        <ul className="nav">
          <li className="nav__item">
            <a className="nav__link" href="http://wcdxm.webcrow.jp">
              Daily
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              有限書庫
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
