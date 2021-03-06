import styled, { css } from 'styled-components';

export const Modal = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.7);
    align-items: center;
    justify-content: center;
  `}
`;

export const ContainerMain = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;

    width: 450px;
    max-width: 100%;
    min-height: 250px;
    background-color: #fff;
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: 'Mountserra';
    margin: 25px;
    font-size: 25px;
    font-weight: bold;
  `}
`;

export const Message = styled.div`
  ${({ theme }) => css`
    font-family: 'Mountserra';
    margin-left: 25px;
    font-size: 20px;
  `}
`;

export const Button = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 10px;
    right: 20px;
  `}
`;
