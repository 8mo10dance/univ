import * as React from 'react'
import { Article } from 'types/models'

type Props = Article

export default ({ title, list }: Props) => {
  return (
    <div className="articles">
      <h2>{title}</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
