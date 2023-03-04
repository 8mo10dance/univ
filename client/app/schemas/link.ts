import * as yup from 'yup'

const schema = yup.object().shape({
  link: yup.object().shape({
    name: yup.string().required('この項目は必須です。'),
    url: yup.string().required('この項目は必須です。'),
  }),
})

export default schema
