import { useState, useEffect } from 'react';
import { User } from 'app/models/user';
import { useUserService } from 'app/services';
import { UserForm } from './form';
import { useRouter } from 'next/dist/client/router';
import * as Styled from './styles';
import { messageError, messageSucess } from 'components/common/toastr';

export const UserRegistration = () => {
  const service = useUserService();
  const [user, setUser] = useState<User>({ id: 0, mail: '', password: '' });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      service.loadUser(id).then((userFind) => setUser(userFind));
    }
  }, [id]);

  const handleSubmit = (user: User) => {
    delete user.id;
    service
      .save(user)
      .then((userSalvo) => {
        setUser(userSalvo);
        messageSucess('Salvo com sucesso!');
        router.push('/');
      })
      .catch((e) => {
        messageError(e.response.data.message);
      });
  };

  return (
    <Styled.Wrapper>
      <Styled.Card className="card bg-light mx-auto ">
        <h4 className="card-header ">Cadastro de usuário</h4>
        <div className="card-body"></div>
        <UserForm user={user} onSubmit={handleSubmit} />
      </Styled.Card>
    </Styled.Wrapper>
  );
};
