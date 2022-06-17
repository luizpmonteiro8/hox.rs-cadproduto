import { useFormik } from 'formik';
import { Input } from 'components/common/input';
import { validationScheme } from './validationScheme';
import { useRouter } from 'next/dist/client/router';
import { Product } from 'app/models/product';
import * as Styled from './styles';

export type ProductFormProps = {
  product: Product;
  onSubmit: (product: Product, { resetForm, setValues }) => void;
  isLoading: boolean;
};

const formSchema = {
  id: null,
  name: '',
  productionDate: '',
  perishableProduct: false,
  expirationDate: '',
  price: 0,
};

export const ProductForm = ({ product, onSubmit, isLoading }: ProductFormProps) => {
  const route = useRouter();
  const formik = useFormik<Product>({
    initialValues: { ...formSchema, ...product },
    onSubmit,
    validationSchema: validationScheme,
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <div>
            {
              <Input
                disabled
                id="id"
                name="id"
                onChange={formik.handleChange}
                value={formik.values.id == null ? '' : formik.values.id}
                label="Id"
              />
            }
          </div>

          <div>
            <Input
              autoFocusValue={true}
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
              label="Nome"
            />
          </div>

          <div>
            <Input
              id="productionDate"
              name="productionDate"
              onChange={formik.handleChange}
              label="Data de fabricação"
              type="date"
              value={String(formik.values.productionDate).split('T')[0]}
              error={
                formik.errors.productionDate && formik.touched.productionDate
                  ? String(formik.errors.productionDate)
                  : ''
              }
            />
          </div>

          <div style={{ width: '100%', padding: '5px 0px' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '5px 0px' }}>
              <input
                className="checkbox"
                type="checkbox"
                id="perishableProduct"
                onChange={() => {
                  formik.setFieldValue('perishableProduct', !formik.values.perishableProduct);
                  if (formik.values.perishableProduct == true) {
                    formik.setFieldValue('expirationDate', '');
                  }
                }}
                checked={formik.values.perishableProduct ? true : false}
              />
              <label className="form-check-label" htmlFor="blocked">
                Perecível
              </label>
            </div>
            <div style={formik.values.perishableProduct ? { display: 'block' } : { display: 'none' }}>
              <Input
                id="expirationDate"
                name="expirationDate"
                disabled={formik.values.perishableProduct ? false : true}
                onChange={formik.handleChange}
                label="Data de validade"
                type="date"
                value={String(formik.values.expirationDate).split('T')[0]}
                error={
                  formik.errors.expirationDate && formik.touched.expirationDate
                    ? String(formik.errors.expirationDate)
                    : ''
                }
              />
            </div>
          </div>

          <div>
            <Input
              id="price"
              name="price"
              onChange={(e) => formik.setFieldValue('price', e.target.value)}
              label="Preço"
              type="number"
              value={formik.values.price == null || formik.values.price === 0 ? '' : formik.values.price}
              error={formik.touched.price && formik.errors.price ? formik.errors.price : ''}
            />
          </div>

          <Styled.Button>
            <button type="submit" disabled={isLoading}>
              Enviar
            </button>
            <div className="buttonLimpar">
              <a
                onClick={() => {
                  route.replace('/cadastros/produtos');
                  formik.resetForm();
                  formik.setValues({ ...formSchema });
                }}
              >
                Limpar
              </a>
            </div>
          </Styled.Button>
        </div>
      </div>
    </form>
  );
};
