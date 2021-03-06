import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginRepository {
  constructor(private readonly prisma: PrismaService) {}

  //autenticacao
  async findByLogin(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new NotFoundError('Login não encontrado.');
    }

    return user;
  }
}
