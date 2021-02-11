import * as React from 'react'
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import { Link } from 'types/models'
import { Header, Container } from 'components'

interface Props {
  links: Link[]
}

const LinkListPage: React.FC<Props> = ({ links }) => {
  return (
    <div>
      <Header>
        <Typography variant="h6">Link一覧</Typography>
      </Header>
      <Container>
        <Box p={2}>
          <Paper>
            <List>
              {links.map((link) => (
                <ListItem key={link.id} divider>
                  <ListItemText primary={link.name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </div>
  )
}

export default LinkListPage
