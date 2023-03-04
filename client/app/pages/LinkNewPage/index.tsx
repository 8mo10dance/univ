import * as React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Typography, Paper, Button, TextField } from '@material-ui/core'
import { Link } from 'types/form'
import { Header, Container, Form } from 'components'
import schema from 'schemas/link'

interface Props {
  link: Link
}

interface FormValues {
  link: Link
}

const LinkNewPage: React.FC<Props> = ({ link }) => {
  const { register, handleSubmit, errors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })
  const formRef = React.useRef<HTMLFormElement>(null)
  const onSubmit = (_: FormValues) => {
    if (!formRef.current) return

    formRef.current.submit()
  }

  return (
    <Form
      ref={formRef}
      action="/links"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Header>
        <Typography variant="h6">Link登録</Typography>
      </Header>
      <Container>
        <Box p={2}>
          <Paper>
            <Box p={2}>
              <TextField
                name="link[name]"
                label="名前"
                fullWidth
                inputRef={register}
                defaultValue={link.name}
                error={!!errors.link?.name}
                helperText={errors.link?.name?.message}
              />
              <TextField
                name="link[url]"
                label="URL"
                fullWidth
                inputRef={register}
                defaultValue={link.url}
                error={!!errors.link?.url}
                helperText={errors.link?.url?.message}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Box mr={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  component="a"
                  href="/links"
                >
                  戻る
                </Button>
              </Box>
              <Box>
                <Button type="submit" variant="contained" color="primary">
                  登録
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Form>
  )
}

export default LinkNewPage
