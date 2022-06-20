import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useState } from 'react';
import * as Styled from './styles';

type Props = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  title: string;
  message: string;
  affirmative: () => void;
  icon: IconDefinition;
  color: string;
};

export const Modal = ({ active, setActive, title, message, affirmative, icon, color }: Props) => {
  const closeModal = () => {
    setActive(false);
  };

  return (
    <Styled.Modal onClick={closeModal} style={active ? { display: 'flex' } : { display: 'none' }}>
      <Styled.ContainerMain>
        <Styled.Title style={{ color: color }}>
          <FontAwesomeIcon icon={icon} style={{ width: '40px', height: '40px', marginRight: '15px' }} />
          {title}
        </Styled.Title>
        <Styled.Message>{message}</Styled.Message>
        <Styled.Button>
          <button onClick={affirmative}>Ok</button>
          <button onClick={closeModal}>Cancelar</button>
        </Styled.Button>
      </Styled.ContainerMain>
    </Styled.Modal>
  );
};
