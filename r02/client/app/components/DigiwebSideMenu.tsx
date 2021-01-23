import * as React from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useLinks } from 'hooks/links'

const drawerWidth = 230

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      backgroundColor: '#878787',
    },
    toolbar: theme.mixins.toolbar,
  }),
)

const Component: React.FC<{}> = () => {
  const classes = useStyles()
  const { links } = useLinks()

  return (
    <div className={classes.drawer}>
      <div className={classes.toolbar} />
      <Divider />
      <List component="nav">
        <ListItem button component="a" href="http://wcdxm.webcrow.jp">
          <ListItemText primary="Daily" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="有限書庫" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Anicode for WEB" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="http://wcdxm.webcrow.jp/MangaCode.php"
        >
          <ListItemText primary="MangaCode" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" subheader={<ListSubheader>Links</ListSubheader>}>
        {links.map((link) => (
          <ListItem key={link.id} button dense component="a" href={link.url}>
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Component
