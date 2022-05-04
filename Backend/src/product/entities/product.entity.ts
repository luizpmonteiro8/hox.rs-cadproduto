import { Product } from '@prisma/client';

export class ProductEntity implements Product {
  id: number;
  name: string;
  productionDate: Date;
  perishableProduct: boolean;
  expirationDate: Date;
  price: number;
}
