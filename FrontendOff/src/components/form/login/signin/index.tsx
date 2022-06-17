import { Credential } from 'app/models/user';
import { LoginForm } from './form';
import { signIn } from 'next-auth/react';
import { messageError } from 'components';
import * as Styled from './styles';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Props = {
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
};
const Login = ({ loading, setLoading }: Props) => {
  const route = useRouter();
  const [crendetialLoading, setCredencital] = useState<Credential>();

  useEffect(() => {
    //fix problem heroku login
    if (loading && crendetialLoading != null) {
      const interval = setInterval(() => {
        handleSubmit(crendetialLoading);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const handleSubmit = async (credential: Credential) => {
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

  return (
    <Styled.Wrapper>
      <Styled.Card className="card bg-light mx-auto ">
        <h4 className="card-header ">Login</h4>
        <div className="card-body"></div>
        <LoginForm onSubmit={handleSubmit} />
      </Styled.Card>
    </Styled.Wrapper>
  );
};

export default Login;
