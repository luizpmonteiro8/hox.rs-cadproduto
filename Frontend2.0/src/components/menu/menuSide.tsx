import { useRouter } from 'next/router';
import { Accordion, AccordionItem } from './accordion';
import * as Styled from './styles';

type Props = {
  logout: () => void;
  menuVisible: boolean;
};

export const MenuSide = ({ menuVisible, logout }: Props) => {
  const router = useRouter();

  return (
    <Styled.Menu style={menuVisible ? { left: '0px' } : { left: '-270px' }}>
      <Accordion title="Cadastrar">
        <AccordionItem title="Produtos" navigate={() => router.push('/cadastros/produtos')} />
      </Accordion>
      <Accordion title="Listar">
        <AccordionItem title="Produtos" navigate={() => router.push('/lista/produtos')} />
      </Accordion>

      <Styled.Footer>
        <button onClick={logout}>Sair</button>
      </Styled.Footer>
    </Styled.Menu>
  );
};
