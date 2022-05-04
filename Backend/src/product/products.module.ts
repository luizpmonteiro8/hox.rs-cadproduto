import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductRepository } from './repositories/product.repository';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [PrismaService, ProductsService, ProductRepository],
})
export class ProductsModule {}
