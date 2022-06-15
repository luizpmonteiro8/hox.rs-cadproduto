import * as Styled from './styles';

export const Loading = () => {
  return (
    <Styled.Loading>
      <Styled.Container>
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </Styled.Container>
    </Styled.Loading>
  );
};
