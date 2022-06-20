import styled, { css } from 'styled-components';
import { ThemeType } from 'styles/theme';

type Props = {
  theme: ThemeType;
};

export const Wrapper = styled.div`
  ${({ theme }: Props) => css`
    margin-top: 70px;
    margin-bottom: 50px;

    h1,
    h4 {
      margin: 0px;
    }
  `}
`;

export const TitleAndSearch = styled.div`
  ${({ theme }: Props) => css`
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
    color: ${theme.colors.textSecundary};
  `}

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const Table = styled.div`
  ${({ theme }: Props) => css`
    width: 90vw;
    margin-bottom: 25px;

    @media (max-width: 884px) {
      overflow-x: scroll;
    }
  `}
`;
