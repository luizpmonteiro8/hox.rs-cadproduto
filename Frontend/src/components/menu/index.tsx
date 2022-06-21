import * as Styled from './styles';
import { useRouter } from 'next/dist/client/router';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { MenuSide } from './menuSide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { MenuBar } from './menuBar';

export type MenuProps = {
  title?: string;
};

export const Menu = ({ title }: MenuProps) => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuType, setMenuType] = useState('side');

  useEffect(() => {
    const menu = localStorage.getItem('menu');
    if (!menu) return;
    setMenuType(menu);
  }, []);

  const logout = () => {
    signOut({ redirect: false });
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const setMenuTypeChange = (menuTypeChange: string) => {
    localStorage.setItem('menu', menuTypeChange);
    setMenuType(menuTypeChange);
    setMenuVisible(false);
  };

  return (
    <Styled.Wrapper
      style={
        menuVisible ? { top: '-50px', transition: '0.5s ease-in-out' } : { top: '0px', transition: '0.5s ease-in-out' }
      }
    >
      <a className="clearButton" onClick={() => router.push('/')}>
        Sistema cad de prod
      </a>
      {menuType == 'bar' && (
        <>
          <MenuBar setMenuTypeChange={setMenuTypeChange} logout={logout} />{' '}
          <div
            style={{
              display: 'flex',
              marginRight: '30px',
              fontFamily: "'Montserrat', sans-serif",
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={logout}
          >
            SAIR
            <FontAwesomeIcon
              icon={faDoorOpen}
              style={{ width: '30px', height: '40px', cursor: 'pointer' }}
              onClick={() => setMenuVisible(true)}
            />
          </div>
        </>
      )}

      <div style={menuType == 'side' ? { display: 'flex' } : { display: 'none' }}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ width: '30px', height: '40px', marginRight: '30px', cursor: 'pointer' }}
          onClick={() => setMenuVisible(true)}
        />
      </div>
      <MenuSide
        menuVisible={menuVisible}
        setMenuTypeChange={setMenuTypeChange}
        setMenuVisible={setMenuVisible}
        logout={logout}
      />
    </Styled.Wrapper>
  );
};
