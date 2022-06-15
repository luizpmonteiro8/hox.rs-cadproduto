import { useFormik } from 'formik';
import { Input, InputPassword } from 'components/common/input';
import { User } from 'app/models/user';
import { validationScheme } from './validationScheme';
import * as Styled from './styles';

export type SignUpFormProps = {
  onSubmit: (user: User) => void;
};

const formSchema = {
  email: '',
  password: '',
};

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const formik = useFormik({
    initialValues: { ...formSchema },
    onSubmit,
    validationSchema: validationScheme,
  });

  return (
    <Styled.Form>
      <h1>Criar conta</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email ? formik.errors.email : ''}
        />
        <InputPassword
          id="password"
          placeholder="Senha"
          onChange={formik.handleChange}
          name="password"
          value={formik.values.password}
          error={formik.touched.password ? formik.errors.password : ''}
          marginRightIconPassword={5}
        />
        <button type="submit">Criar</button>
      </form>
    </Styled.Form>
  );
};
