import * as React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { ArticleGroup } from 'types/models'

interface Props {
  list: ArticleGroup[]
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
          <Link to={`/${item.id}`}>
            {`${formatDate(item.publishedAt)}マネミ`}
          </Link>
        </li>
      ))}
    </ul>
  )
}
