import * as React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Article } from 'types/models'
import ArticleBox from '../components/ArticleBox'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
  }),
)

interface Props {
  articles: Article[]
}

export default ({ articles }: Props) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.toolbar}></div>
      {articles.map((article) => (
        <Box key={article.id} m={3}>
          <ArticleBox {...article} />
        </Box>
      ))}
    </div>
  )
}
