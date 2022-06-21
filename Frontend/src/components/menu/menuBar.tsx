import { PageThemeContext } from 'contexts/ThemeContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Accordion, AccordionChildren, AccordionItem } from './accordion';
import * as Styled from './styles';

type Props = {
  logout: () => void;
  setMenuTypeChange: (type: string) => void;
};

export const MenuBar = ({ setMenuTypeChange, logout }: Props) => {
  const router = useRouter();
  const themeContext = useContext(PageThemeContext);
  return (
    <Styled.MenuBarWrapper>
      <ul>
        <li className="dropdown">
          <a className="dropbtn">Cadastrar</a>
          <div className="dropdown-content">
            <a onClick={() => router.push('/cadastros/produtos')}>Produto</a>
          </div>
        </li>
        <li className="dropdown">
          <a className="dropbtn">Listar</a>
          <div className="dropdown-content">
            <a onClick={() => router.push('/lista/produtos')}>Produto</a>
          </div>
        </li>
        <li className="dropdown">
          <a className="dropbtn">Configuração</a>
          <div className="dropdown-content">
            <div className="accordion">
              <Accordion title="Tema">
                <AccordionItem title="Cinza" onClick={() => themeContext.setTheme('greyColor')} />
                <AccordionItem title="Verde" onClick={() => themeContext.setTheme('greenColor')} />
                <AccordionItem title="Azul" onClick={() => themeContext.setTheme('blueColor')} />
              </Accordion>
              <Accordion title="Menu">
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
