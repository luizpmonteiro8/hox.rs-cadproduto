import * as Yup from 'yup';

export const validationScheme = Yup.object().shape({
  name: Yup.string().trim().required('Campo obrigatório.'),
  productionDate: Yup.date().required('Campo obrigatório.'),
  perishableProduct: Yup.boolean(),
  price: Yup.number().required('Campo obrigatório.').typeError('Campo obrigatório.'),
});
