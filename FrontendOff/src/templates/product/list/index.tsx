import ProductListing from 'components/form/product/listing/index';
import { Base } from '../../base';
import * as Styled from './styles';
import { useEffect } from 'react';

export const ProductListTp = () => {
  useEffect(() => {
    document.title = 'Sistema compras - Produtos';
  }, []);

  return (
    <Styled.Wrapper>
      <Base>
        <ProductListing />
      </Base>
    </Styled.Wrapper>
  );
};
