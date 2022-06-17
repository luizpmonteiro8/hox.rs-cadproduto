import { Dispatch, SetStateAction, useState } from 'react';
import * as Styled from './styles';

type Props = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  title: string;
  message: string;
  affirmative: () => void;
};

export const Modal = ({ active, setActive, title, message, affirmative }: Props) => {
  const closeModal = () => {
    setActive(false);
  };

  return (
    <Styled.Modal onClick={closeModal} style={active ? { display: 'flex' } : { display: 'none' }}>
      <Styled.ContainerMain>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Message>{message}</Styled.Message>
        <Styled.Button>
          <button onClick={affirmative}>Ok</button>
          <button onClick={closeModal}>Cancelar</button>
        </Styled.Button>
      </Styled.ContainerMain>
    </Styled.Modal>
  );
};
