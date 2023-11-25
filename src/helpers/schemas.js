import * as yup from 'yup';

export const schemaCategoryInput = yup.object().shape({
  categoryName: yup
    .string()
    .trim()
    .max(16, 'Max length must be 16 symbols')
    .required('Enter name for category'),
});
