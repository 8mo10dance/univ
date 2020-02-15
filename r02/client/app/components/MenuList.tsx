import * as React from 'react'
import { Link } from 'react-router-dom'
import { List, ListSubheader, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { format } from 'date-fns'
import { ArticleGroup } from 'types/models'

interface Props {
  list: ArticleGroup[]
}

const formatDate = (date: string) => {
  const d = new Date(date)

  return format(d, 'yyyy年MM月dd日')
}

const useStyles = makeStyles(
  createStyles({
    root: {
      width: '100%',
    },
  })
)

export default ({ list }: Props) => {
  const classes = useStyles()

  return (
    <List
      component="nav"
      subheader={<ListSubheader component="h3">議事録一覧</ListSubheader>}
      className={classes.root}
    >
      {list.map(item => (
        <ListItem key={item.id} component={Link} to={`/${item.id}`}>
          <ListItemText primary={`${formatDate(item.publishedAt)}マネミ`} />
        </ListItem>
      ))}
    </List>
  )
}
