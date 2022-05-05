import ProductListing from 'components/form/product/listing/index';
import { Base } from '../../base';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { Loading } from 'components/common/loading';

export const ProductListTp = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Sistema compras - Produtos';
  }, []);

  return (
    <Styled.Wrapper>
      {loading && <Loading />}
      <Base>
        <ProductListing setLoading={setLoading} loading={loading} />
      </Base>
    </Styled.Wrapper>
  );
};
