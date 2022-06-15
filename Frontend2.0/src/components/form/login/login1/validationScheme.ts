import * as Yup from 'yup';

export const validationScheme = Yup.object().shape({
  email: Yup.string().email('Email inválido.').trim().required('Campo obrigatório.'),
  password: Yup.string().required('Campo obrigatório.').min(8, 'Senha dever ter no mínimo 8 caracteres'),
});
