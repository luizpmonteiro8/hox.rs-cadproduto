import * as Styled from './styles';

type Props = {
  setScreen: (type: number) => void;
};

export const FooterLogin = ({ setScreen }: Props) => {
  return (
    <Styled.Button>
      <span>
        <a onClick={() => setScreen(1)}>1</a>
      </span>
      <span>
        <a onClick={() => setScreen(2)}>2</a>
      </span>
      <span>
        <a onClick={() => setScreen(3)}>3</a>
      </span>
    </Styled.Button>
  );
};
