import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faClipboardList, faBook, faGear } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Accordion, AccordionChildren, AccordionItem } from './accordion';
import * as Styled from './styles';
import { useContext, useState } from 'react';
import { PageThemeContext } from 'contexts/ThemeContext';

type Props = {
  logout: () => void;
  menuVisible: boolean;
  setMenuTypeChange: (type: string) => void;
  setMenuVisible: any;
};

export const MenuSide = ({ menuVisible, setMenuVisible, setMenuTypeChange, logout }: Props) => {
  const router = useRouter();
  const themeContext = useContext(PageThemeContext);
  const [openMenu, setOpenMenu] = useState('');
  const [openMenuChildren, setOpenMenuChildren] = useState('');

  const setOpenMenuFunction = (menu: string) => {
    if (openMenu == menu) {
      setOpenMenu('');
      setOpenMenuChildren('');
      return;
    }
    setOpenMenu(menu);
    setOpenMenuChildren('');
  };

  const setOpenMenuChildrenFunction = (menu: string) => {
    if (openMenuChildren == menu) {
      setOpenMenuChildren('');
      return;
    }
    setOpenMenuChildren(menu);
  };

  return (
    <Styled.Menu menuVisible={menuVisible}>
      <Styled.MenuBackground menuVisible={menuVisible} onClick={() => setMenuVisible(false)} />
      <Styled.MenuTitle>
        <p>Menu</p>
        <FontAwesomeIcon
          icon={faXmarkCircle}
          style={{ width: '22px', height: '22px', marginRight: '30px', cursor: 'pointer' }}
          onClick={() => setMenuVisible(false)}
        />
      </Styled.MenuTitle>
      <Accordion
        title="Cadastrar"
        icon={faPencil}
        open={openMenu == 'Cadastrar' ? true : false}
        onClick={setOpenMenuFunction}
      >
        <AccordionItem title="Produtos" onClick={() => router.push('/cadastros/produtos')} icon={faBook} />
      </Accordion>
      <Accordion
        title="Listar"
        icon={faClipboardList}
        open={openMenu == 'Listar' ? true : false}
        onClick={setOpenMenuFunction}
      >
        <AccordionItem title="Produtos" onClick={() => router.push('/lista/produtos')} icon={faBook} />
      </Accordion>
      <Accordion
        title="Configuração"
        icon={faGear}
        open={openMenu == 'Configuração' ? true : false}
        onClick={setOpenMenuFunction}
      >
        <AccordionChildren
          title="Tema"
          icon={faGear}
          open={openMenuChildren == 'Tema' ? true : false}
          onClick={setOpenMenuChildrenFunction}
        >
          <AccordionItem title="Cinza" onClick={() => themeContext.setTheme('greyColor')} icon={faBook} />
          <AccordionItem title="Verde" onClick={() => themeContext.setTheme('greenColor')} icon={faBook} />
          <AccordionItem title="Azul" onClick={() => themeContext.setTheme('blueColor')} icon={faBook} />
        </AccordionChildren>
        <AccordionChildren
          title="Menu"
          icon={faGear}
          open={openMenuChildren == 'Menu' ? true : false}
          onClick={setOpenMenuChildrenFunction}
        >
          <AccordionItem
            title="Barra"
            onClick={() => {
              setMenuTypeChange('bar');
            }}
            icon={faBook}
          />
        </AccordionChildren>
      </Accordion>

      <Styled.Footer>
        <button onClick={logout}>Sair</button>
      </Styled.Footer>
    </Styled.Menu>
  );
};
