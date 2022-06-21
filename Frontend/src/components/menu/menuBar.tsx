import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { PageThemeContext } from 'contexts/ThemeContext';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Accordion, AccordionItem } from './accordion';
import * as Styled from './styles';

type Props = {
  logout: () => void;
  setMenuTypeChange: (type: string) => void;
};

export const MenuBar = ({ setMenuTypeChange, logout }: Props) => {
  const router = useRouter();
  const themeContext = useContext(PageThemeContext);
  const [openMenu, setOpenMenu] = useState('');

  const arrow = <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faAngleDown} />;

  const setOpenMenuFunction = (menu: string) => {
    if (openMenu == menu) {
      setOpenMenu('');
      return;
    }
    setOpenMenu(menu);
  };

  return (
    <Styled.MenuBarWrapper>
      <ul>
        <li className="dropdown">
          <a className="dropbtn">Cadastrar {arrow}</a>
          <div className="dropdown-content">
            <a onClick={() => router.push('/cadastros/produtos')}>Produto</a>
          </div>
        </li>
        <li className="dropdown">
          <a className="dropbtn">Listar {arrow}</a>
          <div className="dropdown-content">
            <a onClick={() => router.push('/lista/produtos')}>Produto</a>
          </div>
        </li>
        <li className="dropdown">
          <a className="dropbtn">Configuração {arrow}</a>
          <div className="dropdown-content">
            <div className="accordion">
              <Accordion title="Tema" open={openMenu == 'Tema' ? true : false} onClick={setOpenMenuFunction}>
                <AccordionItem title="Cinza" onClick={() => themeContext.setTheme('greyColor')} />
                <AccordionItem title="Verde" onClick={() => themeContext.setTheme('greenColor')} />
                <AccordionItem title="Azul" onClick={() => themeContext.setTheme('blueColor')} />
              </Accordion>
              <Accordion title="Menu" open={openMenu == 'Menu' ? true : false} onClick={setOpenMenuFunction}>
                <AccordionItem title="Lateral" onClick={() => setMenuTypeChange('side')} />
              </Accordion>
            </div>
          </div>
        </li>
        {/*  <li>
          <a href="#home">Sair</a>
        </li> */}
      </ul>
    </Styled.MenuBarWrapper>
  );
};
