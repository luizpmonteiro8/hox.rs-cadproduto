import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repositories/product.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly repository: ProductRepository) {}

  async paginate(page: number, size: number, sort: string, order: string, search: string) {
    const { results, totalItems } = await this.repository.paginate(page, size, sort, order, search);
    const totalPages = Math.ceil(totalItems / size) - 1;
    const currentPage = Number(page);

    return {
      results,
      pagination: {
        length: totalItems,
        size: size,
        lastPage: totalPages,
        page: currentPage,
        startIndex: currentPage * size,
        endIndex: currentPage * size + (size - 1),
      },
    };
  }

  async create(createProductDto: CreateProductDto) {
    return this.repository.create(createProductDto);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.repository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
