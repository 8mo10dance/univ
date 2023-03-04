import * as React from 'react'
import { Box, Paper } from '@material-ui/core'
import DigiwebHeader from 'components/DigiwebHeader'
import DigiwebSideMenu from 'components/DigiwebSideMenu'
import NanohaSan from 'components/NanohaSan'

const Component: React.FC<{}> = () => {
  return (
    <Box width={1} height={1}>
      <Paper>
        <DigiwebHeader />
        <Box display="flex">
          <DigiwebSideMenu />
          <Box flex={1}>
            <NanohaSan />
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Component
