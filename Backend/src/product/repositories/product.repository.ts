import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(page: number, size: number, sort: string, order: string, search: string) {
    const results = await this.prisma.product.findMany({
      skip: page * size,
      take: size,
      where: { name: { contains: search } },
      orderBy: { [sort]: order },
    });
    const totalItems = results.length;
    return { results, totalItems };
  }

  async create(createProductDto: CreateProductDto): Promise<any> {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }
  async update(id: number, updateProductDto: UpdateProductDto): Promise<any> {
    return this.prisma.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  async remove(id: number): Promise<ProductEntity> {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
