import * as React from 'react'
import {
  Box,
  Typography,
  Paper,
  Button,
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
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button
                color="primary"
                variant="contained"
                component="a"
                href="/links/new"
              >
                追加
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  )
}

export default LinkListPage
