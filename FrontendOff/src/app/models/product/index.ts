export type Product = {
  id?: number;
  name: string;
  productionDate: Date | string;
  perishableProduct: boolean;
  expirationDate: Date | string;
  price: number;
};
