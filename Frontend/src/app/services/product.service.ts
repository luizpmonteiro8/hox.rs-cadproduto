import { httpClient } from '../http';
import { Product } from '../models/product';
import { AxiosRequestHeaders, AxiosResponse } from 'axios';

const resourceURL = '/products';

export const useProductService = () => {
  const save = async (product: Product): Promise<AxiosRequestHeaders> => {
    const response: AxiosResponse<Product> = await httpClient.post<Product>(resourceURL, product);
    return response.headers;
  };

  const update = async (product: Product): Promise<void> => {
    const url = `${resourceURL}/${product.id}`;
    await httpClient.put<Product>(url, product);
  };

  const deleteProduct = async (id): Promise<void> => {
    const url = `${resourceURL}/${id}`;
    await httpClient.delete(url);
  };

  const loadProduct = async (id): Promise<Product> => {
    const url = `${resourceURL}/${id}`;
    const response: AxiosResponse<Product> = await httpClient.get(url);
    return response.data;
  };

  const loadPageProduct = async (page = 0, size = 10, search = ''): Promise<Product[]> => {
    const url = `${resourceURL}/?pages`;
    const response: AxiosResponse<Product[]> = await httpClient.get(url);
    return response.data;
  };

  return {
    save,
    update,
    loadProduct,
    deleteProduct,
    loadPageProduct,
  };
};
