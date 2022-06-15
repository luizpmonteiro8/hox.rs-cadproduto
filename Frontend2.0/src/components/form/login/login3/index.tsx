import { Credential, User } from 'app/models/user';
import { signIn } from 'next-auth/react';
import { messageError } from 'components';
import * as Styled from './styles';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useUserService } from 'app/services';
import { messageSucess } from 'components/common/toastr';
import { LoginForm } from './formLogin';
import { FooterLogin } from '../footer';
import { SignUpForm } from './formSignup';

type Props = {
  setScreenLogin: Dispatch<SetStateAction<number>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
};
const Login3 = ({ loading, setLoading, setScreenLogin }: Props) => {
  const route = useRouter();
  const [crendetialLoading, setCredencital] = useState<Credential>();
  const [screenActive, setScreenActive] = useState('login');
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

    if (!res.error) {
      route.push('/lista/produtos');
      setLoading(false);
    }

    if (res.error.includes('Email ou senha incorreta')) {
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
      <Styled.ContainerMain>
        <Styled.ContainerLeft>
          {screenActive == 'login' && <LoginForm onSubmit={handleSubmitLogin} />}
          {screenActive == 'signUp' && <SignUpForm onSubmit={handleSubmitSignUp} />}
        </Styled.ContainerLeft>
        <Styled.ContainerRight>
          {screenActive == 'login' && (
            <>
              <h1>Olá, seja bem vindo!</h1>
              <p>Crie sua nova conta</p>
              <a onClick={() => setScreenActive('signUp')}>Clique aqui</a>
            </>
          )}
          {screenActive == 'signUp' && (
            <>
              <h1>Bem vindo novamente!</h1>
              <p>Para conectar com seu usuário criado antes,</p>
              <a onClick={() => setScreenActive('login')}>clique aqui</a>{' '}
            </>
          )}
        </Styled.ContainerRight>
      </Styled.ContainerMain>
      <Styled.Footer>
        <FooterLogin setScreen={setScreenLogin} />
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

export default Login3;
