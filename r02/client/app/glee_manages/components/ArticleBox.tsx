import * as React from 'react'
import { Article } from 'types/models'

type Props = Article

export default ({ title, articleItems }: Props) => {
  return (
    <div className="articles">
      <h2>{title}</h2>
      <ul>
        {articleItems.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}
