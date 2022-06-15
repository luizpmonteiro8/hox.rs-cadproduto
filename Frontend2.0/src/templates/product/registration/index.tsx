import ProductRegistration from 'components/form/product/registration/index';
import { Base } from '../../base';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { Loading } from 'components/common/loading';

export const ProductRegistationTp = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = 'Sistema compras - Produtos';
  }, []);

  return (
    <Styled.Wrapper>
      {loading && <Loading />}
      <Base>
        <ProductRegistration setLoading={setLoading} loading={loading} />
      </Base>
    </Styled.Wrapper>
  );
};
