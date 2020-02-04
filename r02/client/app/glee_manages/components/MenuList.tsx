import * as React from 'react'
import { format } from 'date-fns'
import { ArticleGroup } from 'types/models'

interface Props {
  list: ArticleGroup[]
}

const formatFilename = (date: string) => {
  const d = new Date(date)

  return format(d, 'MMdd')
}

const formatDate = (date: string) => {
  const d = new Date(date)

  return format(d, 'yyyy年MM月dd日')
}

export default ({ list }: Props) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {list.map((item, index) => (
        <li key={index}>
          <a href={`?filename=${formatFilename(item.publishedAt)}.json`}>
            {`${formatDate(item.publishedAt)}マネミ`}
          </a>
        </li>
      ))}
    </ul>
  )
}
