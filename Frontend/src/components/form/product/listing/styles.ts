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
      color: ${theme.colors.textSecundary};
      margin: 0px;
    }
  `}
`;

export const TitleAndSearch = styled.div`
  ${({ theme }: Props) => css`
    display: flex;
    justify-content: space-between;
    margin-right: 25px;
    width: 100%;
    color: ${theme.colors.textSecundary};
  `}

  .totalItem {
    display: flex;
    align-items: flex-end;
    margin-bottom: 5px;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    .totalItem {
      order: 1;
    }
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
