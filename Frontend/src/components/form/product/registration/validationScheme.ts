import * as Yup from 'yup';

export const validationScheme = Yup.object().shape({
  name: Yup.string().trim().required('Campo obrigatório.'),
  productionDate: Yup.date().nullable().required('Campo obrigatório.'),
  perishableProduct: Yup.boolean(),
  price: Yup.number()
    .positive('Deve ser maior que zero.')
    .required('Campo obrigatório.')
    .typeError('Campo obrigatório.'),
  expirationDate: Yup.date()
    .nullable()
    .when('perishableProduct', {
      is: true,
      then: Yup.date()
        .required('Campo obrigatório.')
        .min(Yup.ref('productionDate'), 'Deve ser maior que a data de fabricação.'),
    }),
});
