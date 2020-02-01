import * as React from 'react'
import { ArticleItem } from 'types/models'

interface Props {
  list: ArticleItem[]
}

export default ({ list }: Props) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {list.map((item, index) => (
        <li key={index}>
          <a href={`?filename=${item}`}>
            {`${item.slice(0, 2)}月${item.slice(2, 4)}日マネミ`}
          </a>
        </li>
      ))}
    </ul>
  )
}
