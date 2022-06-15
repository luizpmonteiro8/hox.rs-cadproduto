import { useFormik } from 'formik';
import { Input, InputPassword } from 'components/common/input';
import { Credential } from 'app/models/user';
import { validationScheme } from './validationScheme';
import * as Styled from './styles';

export type LoginFormProps = {
  onSubmit: (credential: Credential) => void;
};

const formSchema = {
  email: 'teste@teste.com.br',
  password: '12345678',
};

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const formik = useFormik<Credential>({
    initialValues: { ...formSchema },
    onSubmit,
    validationSchema: validationScheme,
  });

  return (
    <Styled.Form>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="emailLogin"
          name="email"
          placeholder="Email"
          autoFocusValue={true}
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email ? formik.errors.email : ''}
        />
        <InputPassword
          id="passwordLogin"
          placeholder="Senha"
          onChange={formik.handleChange}
          name="password"
          value={formik.values.password}
          error={formik.touched.password ? formik.errors.password : ''}
          marginRightIconPassword={65}
        />
        <button type="submit">Entrar</button>
      </form>
    </Styled.Form>
  );
};
