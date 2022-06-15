import * as Styled from './styles';
import { useRouter } from 'next/dist/client/router';
import { signOut } from 'next-auth/react';
import { Hambuguer } from './hambuguer';
import { useState } from 'react';
import { MenuSide } from './menuSide';

export type MenuProps = {
  title?: string;
};

export const Menu = ({ title }: MenuProps) => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const logout = () => {
    signOut({ redirect: false });
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const setVisibled = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Styled.Wrapper>
      <a onClick={() => router.push('/')}>Cadastro de produtos</a>
      <Hambuguer setVisibled={setVisibled} />
      <MenuSide menuVisible={menuVisible} logout={logout} />
    </Styled.Wrapper>
  );
};
