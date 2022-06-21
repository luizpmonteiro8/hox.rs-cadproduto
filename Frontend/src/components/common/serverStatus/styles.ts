import styled, { css } from 'styled-components';
import { ThemeType } from 'styles/theme';

type Props = {
  statusServer: boolean;
  theme: ThemeType;
};

export const Wrapper = styled.div<Props>`
  ${({ theme, statusServer }: Props) => css`
    position: absolute;
    right: 0;
    top: 0;
    width: 150px;
    height: 80px;
    justify-content: end;
    text-align: center;
    font-size: 12px;

    .row {
      align-items: center;
      justify-content: center;
      display: flex;
    }

    .red {
      width: 30px;
      height: 30px;
      border-radius: 25px;
      background-color: ${statusServer ? '#9f0000' : '#f40000'};
      margin-right: 5px;
    }
    .green {
      width: 30px;
      height: 30px;
      border-radius: 25px;
      background-color: ${statusServer ? '#00ff00' : '#004a00'};
    }
  `}
`;
