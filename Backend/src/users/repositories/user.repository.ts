import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(page: number, size: number, sort: string, order: string, search: string) {
    const results = await this.prisma.user.findMany({
      skip: page * size,
      take: size,
      where: { email: { contains: search } },
      orderBy: { [sort]: order },
    });
    const totalItems = results.length;
    return { results, totalItems };
  }

  async findById(id: number) {
    const user = await this.prisma.user.findFirst({
      where: { id },
    });

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    return this.prisma.user.create({
      select: { id: true, email: true },
      data: createUserDto,
    });
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return this.prisma.user.update({
      select: { id: true, email: true },
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number): Promise<UserEntity> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
