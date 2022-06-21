import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faClipboardList, faBook, faGear } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Accordion, AccordionChildren, AccordionItem } from './accordion';
import * as Styled from './styles';
import { useContext } from 'react';
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
      <Accordion title="Cadastrar" icon={faPencil}>
        <AccordionItem title="Produtos" onClick={() => router.push('/cadastros/produtos')} icon={faBook} />
      </Accordion>
      <Accordion title="Listar" icon={faClipboardList}>
        <AccordionItem title="Produtos" onClick={() => router.push('/lista/produtos')} icon={faBook} />
      </Accordion>
      <Accordion title="Configuração" icon={faGear}>
        <AccordionChildren title="Tema" icon={faGear}>
          <AccordionItem title="Cinza" onClick={() => themeContext.setTheme('greyColor')} icon={faBook} />
          <AccordionItem title="Verde" onClick={() => themeContext.setTheme('greenColor')} icon={faBook} />
          <AccordionItem title="Azul" onClick={() => themeContext.setTheme('blueColor')} icon={faBook} />
        </AccordionChildren>
        <AccordionChildren title="Menu" icon={faGear}>
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
