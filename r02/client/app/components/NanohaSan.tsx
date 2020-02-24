import * as React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { NanohaSan } from 'images'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
  })
)

const Component: React.FC<{}> = () => {
  const classes = useStyles()

  return (
    <Box width={1}>
      <div className={classes.toolbar} />
      <NanohaSan width="100%" height="auto" />
    </Box>
  )
}

export default Component
