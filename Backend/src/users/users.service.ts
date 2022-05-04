import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UserRepository) {}

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

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.generatePasswordEncryption(createUserDto.password);
    return this.repository.create(createUserDto);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.password = await this.generatePasswordEncryption(updateUserDto.password);
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }

  private async generatePasswordEncryption(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}
