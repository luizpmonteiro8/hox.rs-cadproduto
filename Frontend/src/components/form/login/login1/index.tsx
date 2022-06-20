import { Credential, User } from 'app/models/user';
import { signIn } from 'next-auth/react';
import { messageError } from 'components';
import * as Styled from './styles';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { LoginForm } from './formLogin';
import { SignUpForm } from './formSignup';
import { useUserService } from 'app/services';
import { messageSucess } from 'components/common/toastr';
import { FooterLogin } from '../footer';

type Props = {
  setScreenLogin: Dispatch<SetStateAction<number>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
};
const Login = ({ loading, setLoading, setScreenLogin }: Props) => {
  const route = useRouter();
  const [crendetialLoading, setCredencital] = useState<Credential>();
  const service = useUserService();
  const router = useRouter();

  useEffect(() => {
    //fix problem heroku login
    if (loading && crendetialLoading != null) {
      const interval = setInterval(() => {
        handleSubmitLogin(crendetialLoading);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const handleSubmitLogin = async (credential: Credential) => {
    setCredencital(credential);
    setLoading(true);

    const res = await signIn('credentials', {
      redirect: false,
      email: credential.email,
      password: credential.password,
    });

    console.log('saiu', res);

    if (!res.error) {
      route.push('/lista/produtos');
      setLoading(false);
    }

    if (res.error?.includes('Email ou senha incorreta')) {
      messageError(res.error);
      setLoading(false);
    }
    setLoading(false);
  };

  const handleSubmitSignUp = (user: User) => {
    delete user.id;
    service
      .save(user)
      .then((_) => {
        messageSucess('Salvo com sucesso!');
        router.push('/');
      })
      .catch((e) => {
        messageError(e.response.data?.message);
      });
  };

  return (
    <Styled.Wrapper>
      {/* Controle da animação */}
      <input type="checkbox" id="chk" aria-hidden="true" defaultChecked={true} />

      <Styled.SignUp>
        <label htmlFor="chk" aria-hidden="true">
          Criar conta
        </label>
        <SignUpForm onSubmit={handleSubmitSignUp} />
      </Styled.SignUp>

      <Styled.Login className="login">
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <LoginForm onSubmit={handleSubmitLogin} />
      </Styled.Login>
      <Styled.Footer>
        <FooterLogin setScreen={setScreenLogin} />
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

export default Login;
