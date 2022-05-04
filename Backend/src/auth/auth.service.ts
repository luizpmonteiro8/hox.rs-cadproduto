import { Injectable, UnauthorizedException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UserEntity } from 'src/users/entities/user.entity';
import { UserRepository } from 'src/users/repositories/user.repository';
import { JwtPayload } from './strategies/models/jwt-payload.model';

@Injectable()
export class AuthService {
  constructor(private readonly repository: UserRepository) {}

  public async createAccessToken(userId: number): Promise<string> {
    return sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }

  public async validateUser(jwtPayload: JwtPayload): Promise<UserEntity> {
    const user: UserEntity = await this.repository.findById(Number(jwtPayload.userId));
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado.');
    }

    return user;
  }

  private static jwtExtractor(request: any): string {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Usuário não tem permissão.');
    }

    const [, token] = authHeader.split(' ');

    return token;
  }

  public returnJwtExtractor(): (request: Request) => string {
    return AuthService.jwtExtractor;
  }
}
