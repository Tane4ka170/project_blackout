import * as yup from 'yup';

const validationSchema = yup.object().shape({
  category: yup.string().required('Category is required'),
  sum: yup.number().required('Sum is required'),
  desc: yup.string().max(264, 'To long'),
})



export default validationSchema;