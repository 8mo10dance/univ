import * as React from 'react'
import { Divider, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { ArticleGroup } from 'types/models'
import MenuList from 'components/MenuList'

interface Props {
  articleGroups: ArticleGroup[]
}

const MENU_LIST_SIZE = 5

const drawerWidth = 230

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      backgroundColor: '#878787',
    },
    toolbar: theme.mixins.toolbar,
  })
)

export default ({ articleGroups }: Props) => {
  const [isLatest, toggle] = React.useState(true)

  const handleClick = () => {
    toggle(!isLatest)
  }

  const mainList = articleGroups.slice(0, MENU_LIST_SIZE)
  const subList = articleGroups.slice(MENU_LIST_SIZE)

  const classes = useStyles()

  return (
    <div className={classes.drawer}>
      <div className={classes.toolbar} />
      <Divider />
      <MenuList list={isLatest ? mainList : subList} />
      <Button color="default" onClick={handleClick}>
        {isLatest ? 'これ以前の議事録' : '最新の議事録'}
      </Button>
      <Divider />
      <Button color="default" component="a" href="index_old.php">
        前期議事録
      </Button>
    </div>
  )
}
