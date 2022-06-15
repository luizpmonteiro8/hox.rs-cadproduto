import { useRef } from 'react';
import * as Styled from './styles';

type Props = {
  setVisibled: () => void;
};

export const Hambuguer = ({ setVisibled }: Props) => {
  return (
    <Styled.Hambuguer>
      <div className="checkbox-wrapper">
        <input type="checkbox" id="toggle" onClick={setVisibled} />
        <label className="checkbox" htmlFor="toggle">
          <div className="trace"></div>
          <div className="trace"></div>
          <div className="trace"></div>
        </label>
      </div>
    </Styled.Hambuguer>
  );
};
