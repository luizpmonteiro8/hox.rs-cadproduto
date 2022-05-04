import { Injectable } from '@nestjs/common';
import { LoginRepository } from './repositories/login.repository';
import { SignInDto } from './dto/signin.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { AuthService } from 'src/auth/auth.service';
import * as bcrypt from 'bcrypt';
import { ConflictError } from 'src/common/errors/types/ConflictError';

@Injectable()
export class LoginService {
  constructor(private readonly repository: LoginRepository, private readonly authService: AuthService) {}

  public async signin(signinDto: SignInDto): Promise<{ accessToken: string; user: UserEntity }> {
    const user = await this.repository.findByLogin(signinDto.mail);

    if (!user) {
      throw new NotFoundError('Login inválido.');
    }
    const match = await this.checkPassword(signinDto.password, user.password);

    if (!match) {
      throw new NotFoundError('Credenciais inválida.');
    }

    const jwtToken = await this.authService.createAccessToken(user.id);

    delete user.password;

    return { accessToken: jwtToken, user };
  }

  private async checkPassword(password: string, userPassword: string): Promise<boolean> {
    const match = await bcrypt.compare(password, userPassword);
    if (!match) {
      throw new ConflictError('Senha incorreta.');
    }
    return match;
  }
}
