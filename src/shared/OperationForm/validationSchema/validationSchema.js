import * as yup from 'yup';

const validationSchema = yup.object().shape({
  category: yup.mixed().required('Category is required'),
  sum: yup.number().required('Sum is required'),
  comment: yup.string().min(3, 'Too short').max(48, 'Too long'),
})



export default validationSchema;