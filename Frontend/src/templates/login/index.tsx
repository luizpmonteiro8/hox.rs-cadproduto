import * as Styled from './styles';
import Login from 'components/form/login/login1';
import Login2 from 'components/form/login/login2';
import { useRouter } from 'next/dist/client/router';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Loading } from './../../components/common/loading/index';
import { ToastContainer } from 'react-toastify';
import Login3 from 'components/form/login/login3';
import { ServerStatus } from 'components/common/serverStatus';

export const LoginTp = () => {
  const [loading, setLoading] = useState(false);
  const [screenLogin, setScreenLogin] = useState(1);
  const { status } = useSession();
  const router = useRouter();
  if (status === 'authenticated') {
    router.push('/lista/produtos');
  }
  useEffect(() => {
    document.title = 'Bem vindo!';
  }, []);

  return (
    <Styled.Wrapper>
      {loading && <Loading />}
      <ToastContainer
        limit={3}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ServerStatus />
      {screenLogin == 1 && <Login setScreenLogin={setScreenLogin} setLoading={setLoading} loading={loading} />}
      {screenLogin == 2 && <Login2 setScreenLogin={setScreenLogin} setLoading={setLoading} loading={loading} />}
      {screenLogin == 3 && <Login3 setScreenLogin={setScreenLogin} setLoading={setLoading} loading={loading} />}
    </Styled.Wrapper>
  );
};
