import * as Styled from './styles';
import { useRouter } from 'next/dist/client/router';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { MenuSide } from './menuSide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
    <Styled.Wrapper
      style={
        menuVisible ? { top: '-50px', transition: '0.5s ease-in-out' } : { top: '0px', transition: '0.5s ease-in-out' }
      }
    >
      <a onClick={() => router.push('/')}>Sistema cad de prod</a>
      <FontAwesomeIcon
        icon={faBars}
        style={{ width: '30px', height: '40px', marginRight: '30px', cursor: 'pointer' }}
        onClick={() => setMenuVisible(true)}
      />
      <MenuSide menuVisible={menuVisible} setMenuVisible={setMenuVisible} logout={logout} />
    </Styled.Wrapper>
  );
};
