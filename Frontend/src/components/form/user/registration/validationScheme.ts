import * as Yup from 'yup';

export const validationScheme = Yup.object().shape({
  mail: Yup.string().trim().required('Campo obrigatório.').email('Email inválido.'),
  password: Yup.string().trim().required('Campo obrigatório.').min(8, 'Minimo de 8 caracteres'),
});
