import { Credential, User } from 'app/models/user';
import { signIn } from 'next-auth/react';
import { messageError } from 'components';
import * as Styled from './styles';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useUserService } from 'app/services';
import { messageSucess } from 'components/common/toastr';
import { LoginForm } from './formLogin';
import { SignUpForm } from './formSignup';
import { FooterLogin } from '../footer';

type Props = {
  setScreenLogin: Dispatch<SetStateAction<number>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
};
const Login2 = ({ loading, setLoading, setScreenLogin }: Props) => {
  const route = useRouter();
  const [crendetialLoading, setCredencital] = useState<Credential>();
  const [moveScreen, setMoveScreen] = useState('');
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
      <div className={`container ${moveScreen}`} id="container">
        <div className="form-container sign-up-container">
          <SignUpForm onSubmit={handleSubmitSignUp} />
        </div>
        <div className="form-container sign-in-container">
          <LoginForm onSubmit={handleSubmitLogin} />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bem vindo novamente!</h1>
              <p>Para conectar com seu usuário criado antes,</p>
              <button className="ghost" id="signIn" onClick={() => setMoveScreen('')}>
                Clique aqui
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Olá, seja bem vindo!</h1>
              <p>Crie sua nova conta</p>
              <button className="ghost" id="signUp" onClick={() => setMoveScreen('right-panel-active')}>
                Criar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Styled.Footer>
        <FooterLogin setScreen={setScreenLogin} />
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

export default Login2;
