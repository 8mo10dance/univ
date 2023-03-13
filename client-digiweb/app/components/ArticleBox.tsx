import * as React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Article } from 'types/models'

type Props = Article

export default ({ title, articleItems }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1" component="div">
          <ul style={{ margin: 0 }}>
            {articleItems.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  )
}
